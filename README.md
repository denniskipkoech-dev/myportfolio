# Dennis Kipkoech — Developer Portfolio

A responsive, static portfolio built with plain HTML, CSS, and JavaScript. It needs no build step, package manager, or framework.

## Personalize before publishing

Edit `index.html` and replace:

- `YOUR_EMAIL@example.com` with the email address you want to publish.
- `YOUR_CV_URL` with a public CV URL, or remove the CV link if you do not want to share one yet.
- `YOUR_PARKING_DEMO_URL` and `YOUR_LAUNCHPAD_DEMO_URL` with real demos when available.
- The project repository links with each project's actual repository URL.
- The project demo placeholders by adding a real demo URL when one exists.
- Add your portrait to the project folder as `profile.jpg`. It will appear in the center of the hero illustration automatically; if the file is absent, the illustration remains visible.
- Update the SEO title, description, and social preview image if desired.

The content describes the parking application as a learning project and Developer Career Launchpad as an in-progress concept. Keep those labels accurate as the projects develop. Never link to a demo or CV that is not ready to share.

Social profiles linked in the footer: GitHub, TikTok, WhatsApp, X, and Facebook. Edit those links in `index.html` if your public profile URLs change.

## Preview locally

Open `index.html` in a browser. For a local web server, use VS Code Live Server or run `python -m http.server 8000` from this directory and visit `http://localhost:8000`.

## Deploy with GitHub Pages

See [GitHub Pages publishing source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) for current settings.

1. Create a new GitHub repository, for example `dennis-portfolio`.
2. From this folder, initialize Git, commit the site files, and push the default branch:

   ```sh
   git init
   git add index.html styles.css script.js favicon.svg og-image.svg profile.jpg README.md
   git commit -m "Build personal developer portfolio"
   git branch -M main
   git remote add origin https://github.com/denniskipkoech-dev/dennis-portfolio.git
   git push -u origin main
   ```

3. In the repository on GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. GitHub will show the site URL in the Pages settings after deployment finishes. For a custom domain, configure it under Pages and add the DNS records required by GitHub.

## Deploy with Vercel

### Import from GitHub

See [Vercel static site build settings](https://vercel.com/docs/builds) for the current options.

1. Push this folder to GitHub using the steps above.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the portfolio repository.
4. Keep the framework preset as **Other**. Leave the build command and output directory empty; set the root directory to `./`.
5. Choose **Deploy**. Vercel will provide a live URL and automatically redeploy after pushes to the linked branch.

### Deploy with Vercel CLI

1. Install Node.js, then install the Vercel CLI with `npm i -g vercel`.
2. From the project directory, run `vercel` and follow the prompts. Use the current directory as the project root and no build command.
3. When ready to publish a production deployment, run `vercel --prod`.

## Accessibility and motion

The site uses semantic landmarks, a skip link, visible keyboard focus, an accessible mobile navigation button, and a reduced-motion mode. Motion is lightweight and the site remains usable when JavaScript is unavailable.

## Files

- `index.html` — page content and metadata
- `styles.css` — responsive layout, visual design, and reduced-motion support
- `script.js` — mobile menu, reveal transitions, and current footer year
- `favicon.svg` — browser icon
- `og-image.svg` — social sharing preview
