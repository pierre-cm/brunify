<script>
  import icons from "../stores/icons"

  export let name = ""

  $: {
    if (name && !(name in $icons)) {
      icons.update((icons) => ({ ...icons, [name]: null }))
      fetch(`/icons/${name}.svg`)
        .then((res) => res.text())
        .then((svg) => {
          icons.update((icons) => ({ ...icons, [name]: svg }))
        })
    }
  }
</script>

<div class={`Icon ${$$props.class}`}>
  {@html $icons[name] || ""}
</div>

<style>
  .Icon {
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    width: 100%;
    height: 100%;
  }
</style>
