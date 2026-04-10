## Project Structure

```sh
src
|
+-- app               # App Router
|
+-- components        # shared components used across the entire application
|
+-- config            # global configurations
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # reusable libraries preconfigured for the application
|
+-- models            # global models
|
+-- styles            # global styles
|
+-- types             # shared types used across the application
```

# Before run

### Install deps

```bash
  npm i
```

Update `.env` based on `.env.example`

### Update blog feature

- `/src/features/blog/api/config.ts`
- `/src/features/blog/types.ts`

### SEO

- In each file `/srs/app/*/page.tsx`, there is the constant `metadata`, where you can specify
  `title`, `description` etc.
- update `/public/robots.txt`
- rename `/src/_sitemap.ts` to `/src/sitemap.ts`
