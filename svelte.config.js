import adapter from "@sveltejs/adapter-static"

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
}
