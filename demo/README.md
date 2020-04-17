# Demo

This project uses [Next.js](https://nextjs.org/) and may be accessed at https://moxystudio.github.io/react-page-swapper/.

Execute the following commands to run the demo locally:

```sh
npm i
npm run dev
```

## Testing changes locally

You might be running the demo to check if local changes to `@moxy/react-page-swapper` are working correctly. Using `npm link` or `file:..` doesn't work well as it will result in different React packages being used simultaneously.

The best way to test changes locally is to use [`connect-deps`](https://www.npmjs.com/package/connect-deps), like so:

```sh
npx connect-deps link .. -c
npm run dev
```

ℹ️ Be sure to restart the development server so that Next.js picks up the updated `node_modules`.

Moreover, you might want to watch changes on the `src/` folder to automatically compile with Babel. For this, you may use [`on-change`](https://github.com/sindresorhus/on-change).

```sh
npx onchange '../src/**/*' -- npm run build
```
