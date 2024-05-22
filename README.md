# Sciquel Front-End Test Repo

## Instructions

- the home page features a "main story card" and three "recent article cards" below it.  Using the provided design, recreate the main card and article cards on the home page.  Some sample images are provided in the `/public` folder.
- extra for this page: if you would like, you can pull sample data from the `/api/home` route.  This route takes an empty GET request and returns sample information in this structure (date is ms since epoch):
```
interface StoryInfo {
  title: string;
  subtitle: string;

  subject: "biology" | "physics" | "computer science";

  authors: string[];

  date: number;

  titleImgSrc: string;

  format: "article" | "video" | "podcast";
}
```
with this being the main body of the response. The interface is exported from `/api/home/route.ts` under the name "GetHomeResult"

```
export interface GetHomeResult {
  mainCard: StoryInfo;
  recentArticles: StoryInfo[];
}
```

- the header contains a link to a contact us page.  Ignoring styling, create a contact us form that submits a POST request to the `/api/contact-us` endpoint.  Details below.

The contact us endpoint expects formData with three fields
- name: a required string
- email: a required string
- message: a required string

final bonus: if you want, style the contact us form.

### the extras for each page are completely optional





This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
