import { draftMode } from 'next/headers'
import { CmsPreviewListener } from '../../../components/cms-preview-listener'

export default async function PreviewPage({ params, searchParams }: { params: Promise<{ slug: string }>, searchParams: Promise<{ token?: string }> }) {
  const { slug } = await params
  const { token } = await searchParams
  const origin = process.env.BACKEND_ORIGIN ?? 'http://localhost:4000'
  const response = await fetch(`${origin}/api/v1/preview/pages/${slug}?token=${encodeURIComponent(token ?? '')}`, { cache: 'no-store' })
  if (!response.ok) return <main style={{ padding: 24 }}>Preview unavailable</main>
  const page = await response.json() as { title?: string }
  const draft = await draftMode()
  draft.enable()
  return <main style={{ padding: 24 }}><CmsPreviewListener /><h1>{page.title ?? slug}</h1><p>CMS draft preview</p></main>
}
