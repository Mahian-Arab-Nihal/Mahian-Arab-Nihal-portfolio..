# Nihal — 3D Interactive Portfolio

A dark-mode, scroll-driven portfolio built with Next.js 14 (App Router), React Three Fiber, Framer Motion, GSAP-ready structure, and Lenis smooth scroll — designed for Mahian Arab Nihal, Brand Designer & Clothing Video Ads Specialist.

## What's inside

- **Hero** — full-screen 3D scene (a distorted torus knot standing in for "fabric") that reacts to cursor movement and scroll depth.
- **About** — bio + interactive timeline.
- **Selected Work** — project cards with a cursor-reactive glow and 3D tilt.
- **Toolkit** — skills laid out as an orbiting graph around a central node (desktop), simple list on mobile.
- **AI Assistant widget** — a floating chat bubble that answers visitor questions about the projects, skills, and how to get in touch. It runs entirely client-side off the data in `lib/data.ts` — no API key needed, so it works out of the box on a free Vercel deploy.
- **Contact** — validated form that opens the visitor's email client with the message pre-filled.
- Custom magnetic-ish cursor, smooth scrolling, loading splash, custom 404, SEO/OpenGraph metadata.

## Editing your content

Everything text-based lives in one place: **`lib/data.ts`**. Update your name, bio, skills, projects, and links there and it flows through the whole site.

The assistant's canned answers live in **`lib/assistant.ts`** if you want to tune what it says.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Notes on the 3D scene

The hero uses `@react-three/drei`'s `Environment preset="city"` for reflections, which fetches a small HDRI from a CDN at runtime — this needs an internet connection when the page loads (normal for a deployed site, just keep in mind while testing offline).

## Swapping in a real AI backend later

The chat widget is intentionally dependency-free so it deploys for free. If you later want it backed by a real LLM, you'd add a `/app/api/chat/route.ts` route that calls the Anthropic API with your own API key (stored as a Vercel environment variable) and swap `getAssistantReply` in `components/AIChatbot.tsx` for a `fetch` to that route.
