# Full-stack CRUD with Prisma, Express and React

## Introduction

This project is a full-stack CRUD (create, read, update, delete) application using [Prisma](https://www.prisma.io/) and [Next.js](https://nextjs.org/)

## Installation

copy the `.env.example` file to `.env`

```
DATABASE_URL="mysql://root:123456@localhost:3306/prisma-next"
```

Install dependencies

```bash
npm install
```

Generate the Prisma Client

```
npx prisma generate
```

Migrate Database with Prisma

```
npx prisma migrate dev
```

Start the application...

```bash
npm run dev
```

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
