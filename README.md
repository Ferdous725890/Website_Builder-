This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

#api structure
📂 app
 ├── 📂 api
 │   ├── 📂 websites
 │   │   ├── route.js         (GET, POST Websites)
 │   │   ├── [id]/route.js    (GET, PUT, DELETE Website by ID)
 │   │
 │   ├── 📂 sections
 │   │   ├── route.js         (GET, POST Sections)
 │   │   ├── [id]/route.js    (GET, PUT, DELETE Section by ID)
 │   │
 │   ├── 📂 components
 │   │   ├── route.js         (GET, POST Components)
 │   │   ├── [id]/route.js    (GET, PUT, DELETE Component by ID)
 │   │
 │   ├── 📂 users
 │   │   ├── route.js         (GET, POST Users)
 │   │   ├── [id]/route.js    (GET, PUT, DELETE User by ID)



{
  "name": "My Website",
  "userId": "65f123abc456def7890123",
  "sections": [
    {
      "name": "Header Section",
      "order": 1,
      "components": [
        { "type": "text", "content": "Welcome to My Website", "order": 1 },
        { "type": "button", "content": "Click Here", "order": 2 }
      ]
    },
    {
      "name": "Image Section",
      "order": 2,
      "components": [
        { "type": "image", "content": "https://example.com/image.jpg", "order": 1 }
      ]
    }
  ]
}
