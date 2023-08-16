import adapter from "@sveltejs/adapter-static"
import preprocess from "svelte-preprocess"

const dev = process.argv.includes("dev")

/** @type {import('@sveltejs/kit').Config} */
export default {
  kit: {
    adapter: adapter({
      fallback: "index.html",
    }),
    paths: {
      base: dev ? "" : process.env.BASE_PATH,
    },
  },
  preprocess: [
    preprocess({
      scss: {
        prependData: `@import '${
          new URL("./src/variables.scss", import.meta.url).pathname
        }';`,
      },
    }),
  ],
}
