![WeenSpace Admin](https://user-images.githubusercontent.com/44495184/185379472-2a204c0b-9b7a-4a3e-93c0-2cb85205ed5e.png)

<div align="center">
  <h1>WeenSpace Admin</h1>
</div>

<div align="center">
  <p>A GraphQL-powered, single-page dashboard application for <a href="https://github.com/WeenSpace/weenspace">weenspace</a>.</p>
</div>

<div align="center">
  <a href="https://weenspace.com/">🏠 Website</a>
  <span> • </span>
  <a href="https://docs.weenspace.com/docs/3.x/">📚 Docs</a>
  <span> • </span>
  <a href="https://weenspace.com/blog/">📰 Blog</a>
  <span> • </span>
  <a href="https://twitter.com/weenspace">🐦 Twitter</a>
  <span> • </span>
  <a href="https://discord.gg/H52JTZAtSH">💬 Discord</a>
</div>

<div align="center">
   <span> • </span>
  <a href="https://githubbox.com/weenspace/weenspace-admin">🔎 Explore Code</a>
</div>

## Prerequisites

- Node.js v18+
- A running instance of [WeenSpace](https://github.com/WeenSpace/weenspace/)

## Development

1. Clone the repository:

```bash
git clone https://github.com/WeenSpace/weenspace-admin.git
```

2. Enter the project directory:

```bash
cd weenspace-admin
```

3. Install the dependencies:

```bash
npm i
```

4. Configure the env vars as described in [docs/configuration.md](docs/configuration.md).

5. Start the development server with:

```bash
npm run dev
```

> Note:
> If you see CORS errors, check [CORS configuration](https://docs.weenspace.com/docs/3.x/developer/running-weenspace/configuration#allowed_client_hosts) of your WeenSpace instance or CORS settings in the Cloud Console.

## Docs

- [Configuration ⚙️](docs/configuration.md)
- [Error tracking ⚠️](docs/error-tracking.md)
- [Running tests 🏁](docs/running-tests.md)
- [Usage with Docker 🐳](docs/docker.md)
- [Sentry adapter 🗼](docs/sentry-adapter.md)
- [Deployment 🌐](docs/deployment.md)
