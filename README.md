# THIS IS A WEBSITE

This is a website for the [NOAA Water Column Sonar](https://github.com/orgs/CI-CMG/projects/11) Capstone Project

It contains information about the project, the people, and weekly progress updates.

## Installation and Setup

1. Clone the repository

2. Install dependencies

```sh
npm install
```

3. Install Vercel CLI (optional but recommended)

```sh
npm install -g vercel
```

## Building

This website is hosted on Vercel and can be viewed locally using it

1. Build the project
```sh
vercel dev
```

2. Preview the site. By default, Vercel hosts the site at `http://localhost:3000`

## Adding Reports

1. Your reports live under `src/progress-reports/{your name}`

2. Add a `.org` or `.md` file to your reports directory with the week name

```
week1.md
week2.org
```

> [!IMPORTANT]
> Your file MUST follow this naming convention EXACTLY to be found and rendered by the website

## Deployment

All pushes to `main` will automatically build and deploy the website

## Dependencies

- [Vite](https://vite.dev/) - Build tool
- [Vercel](https://vercel.com/) - Hosting and backend
- [Supabase](https://supabase.com/) - Database
- [Marked](https://marked.js.org/) - Markdown parser
- [Orga](https://github.com/orgapp/orgajs) - Org parser
- [Rehype](https://github.com/rehypejs/rehype) - HTML processor
