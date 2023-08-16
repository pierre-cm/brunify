<script>
  import "../app.scss"
</script>

<nav class="navbar" aria-label="main navigation">
  <div class="navbar-brand">
    <span class="Title"><a href="/"> brunify </a><i>💁‍♀️</i></span>
  </div>
</nav>
<main>
  <slot />
</main>

<style lang="scss">
  .navbar {
    height: 3rem;
    padding-left: 1rem;
    border-bottom: 1px solid $body-border-color;
    .Title {
      font-family: "Raleway";
      height: 3rem;
      font-size: 2rem;
      font-weight: 700;
      a {
        color: $primary;
      }
      i {
        font-style: normal;
        user-select: none;
      }
    }
  }
</style>
