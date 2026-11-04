import { unstable_cache } from 'next/cache'

const backendOrigin = process.env.BACKEND_ORIGIN ?? process.env.NEXT_PUBLIC_API_ORIGIN ?? 'http://localhost:4000'
const fallback: Record<string, unknown> = {}

export async function getCmsPage(slug: string): Promise<Record<string, unknown> | null> {
  return unstable_cache(async () => {
    try {
      const response = await fetch(`${backendOrigin}/api/v1/public/pages/${slug}`, { next: { tags: ['cms-pages', `cms-page-${slug}`], revalidate: 300 } })
      if (!response.ok) throw new Error(`CMS response ${response.status}`)
      const page = await response.json() as Record<string, unknown>
      fallback[slug] = page
      return page
    } catch {
      return fallback[slug] ?? null
    }
  }, [`cms-page-${slug}`], { revalidate: 300, tags: ['cms-pages', `cms-page-${slug}`] })()
}

export async function getCmsSettings(): Promise<Record<string, unknown> | null> {
  try {
    const response = await fetch(`${backendOrigin}/api/v1/public/settings`, { next: { tags: ['cms-settings'], revalidate: 300 } })
    if (!response.ok) return null
    return await response.json() as Record<string, unknown>
  } catch {
    return null
  }
}
