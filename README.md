# St. Finbarr's College three-app workspace

The repository contains three independent applications:

| Application | Directory | Port |
|---|---|---:|
| Public Next.js website | repository root | 3000 |
| CMS API | `backend/` | 4000 |
| Next.js admin portal | `admin/` | 3001 |

Each application has its own dependencies and lockfile. Applications communicate over HTTP; the backend owns MongoDB data and validation.

## Local setup

Start MongoDB, then use three terminals:

```powershell
# Frontend
npm install
npm run dev

# Backend
cd backend
npm install
Copy-Item .env.example .env
npm run seed
npm run dev

# Admin
cd admin
npm install
npm run dev
```

## Seed

From `backend/`, run `npm run seed`. Copy the required values from `backend/.env.example`; the seed creates the initial SUPER_ADMIN and the home/story/settings content inventory defaults.

## Environment values to fill

- `backend/.env`: MongoDB URI, admin credential, secrets, frontend origin, admin origin, frontend revalidation URL.
- `admin/.env.local`: backend origin and public frontend origin.
- Frontend `.env.local`: `BACKEND_ORIGIN`, `REVALIDATE_SECRET` (matching `backend/.env`).

Production secrets must be unique, random, and at least 32 characters. SMTP delivery for password resets is not yet wired; a real mail provider adapter remains required.
