import adapter from "@sveltejs/adapter-static"

export default {
  kit: {
    base: "./",
    adapter: adapter({
      pages: "docs",
      assets: "docs",
      fallback: "index.html",
    }),
  },
}
