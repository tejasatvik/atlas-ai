# Atlas AI

Atlas AI is an early-stage project exploring an autonomous AI engineering platform. This repository contains a lightweight, framework-free landing page describing the project's current vision and proposed architecture. The site does not claim that product features or integrations are already available.

## Preview locally

Open `index.html` in a browser. For a local HTTP preview, run `python -m http.server 8000` from this directory and visit [http://localhost:8000](http://localhost:8000).

## Publish with GitHub Pages

1. Push this repository to GitHub.
2. In the repository, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source if prompted.
3. The workflow in `.github/workflows/pages.yml` publishes the site from the `main` branch. GitHub Pages will publish the site at the URL shown in the Pages settings.

The site uses relative asset paths, so it also works when served from a repository subpath. No build step or backend is needed.

## Configure the GitHub link

`GITHUB_REPOSITORY_URL` near the top of `script.js` points to this project's repository. Update it if the repository moves.

## Change content and branding

- Edit page copy and sections in `index.html`.
- Adjust colors, layout, typography, and responsive breakpoints in `styles.css`.
- Update the agent diagram interactions and GitHub URL in `script.js`.
- Replace `favicon.svg` and `social-preview.svg` to change the browser icon and social preview artwork.

## Candidate infrastructure

Amazon Bedrock, AWS Lambda or ECS, Amazon S3, DynamoDB or PostgreSQL, and CloudWatch are listed as technologies under consideration only. They are not represented as deployed integrations.
