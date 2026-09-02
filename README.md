# TechMarra

A multilingual business website built with Next.js, React and TypeScript. It presents services, pricing, selected work and contact options across dedicated pages.

[View website](https://tech-marra.vercel.app)

## Frontend implementation

- Reusable page sections and navigation components.
- Shared language context and translation content.
- EmailJS contact form with loading, success and error states.
- Calendly integration for scheduling.

The contact form requires EmailJS configuration. This repository is the public business website, not a hotel booking backend or administration product.

## Local setup

Use Node.js 22 and pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Configure `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` and `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` in `.env.local` for the contact form. These are client-side identifiers; configure the allowed origins in EmailJS. Do not put private service credentials in client-side variables.

## Structure

- `app/` — pages and layouts.
- `components/` — shared sections, navigation and UI components.
- `lib/language-context.tsx` and `lib/translations.ts` — language selection and copy.

## Current engineering limitations

There is no automated test suite. The Next.js configuration currently bypasses TypeScript build errors, so a successful build alone is not a type-safety check. Image optimization is disabled. These should be addressed before treating this repository as a production-quality engineering example.

This README describes the source implementation; it does not claim that live contact delivery has been tested.
