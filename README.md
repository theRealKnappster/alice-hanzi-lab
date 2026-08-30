# Monkey King's Hanzi Tree

A touch-first prototype for testing whether Chinese characters stick better when the same material returns through sight, sound, and physical writing. The Monkey King handles the jokes. The learner handles the brush.

## Current curriculum boundary

- Established six-level HSK Level 1 vocabulary: 150 words
- 178 distinct simplified characters drawn from those words
- A 15-character hand-curated foundation retained at the start
- 12-prompt sessions
- Writing with Hanzi Writer
- Word-level sound identification
- Word-level meaning recognition
- Local, pathway-specific progress
- Installable home-screen web app

The official HSK list controls coverage. The app controls the teaching order: characters enter through writing, then return inside vocabulary words. The first 15 characters include verified stroke-type names. The rest use Hanzi Writer's stroke order and direction checking without pretending unverified stroke names are authoritative.

Curriculum coverage is pinned to the established HSK syllabus published by Chinese Testing International, rather than the HSK 3.0 trial syllabus. Vocabulary pinyin and concise English glosses were curated from CC-CEDICT-derived open data; see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## Run locally

```bash
npm ci
npm run test:data
npm run dev
```

Pushes to `main` build and publish through GitHub Pages.
