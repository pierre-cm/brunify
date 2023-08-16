<script>
  import Icon from "../lib/components/Icon.svelte"
  const REGEX = /[ \t]*<\!?\/?\w+[^<>]*>[ \t]*|[ \t]*<!--.*?-->[ \t]*/g

  let html = ""
  let result = ""

  const onInput = (e) => {
    let value = e.target.value
    result = value.replace(REGEX, "").replace(/\n+/g, "\n").trim()
  }
  const copy = () => {
    navigator.clipboard.writeText(result)
  }
</script>

<div class="Page">
  <div class="Content">
    <h1 class="title is-1">
      HTML code <span class="highlighted">→</span> Raw text
    </h1>
    <i />
    <div>
      <span class="label highlighted">HTML code</span>
      <textarea
        class="textarea"
        placeholder="HTML code"
        value={html}
        on:input={onInput}
      />
    </div>

    <div class="TextArea">
      <span class="label highlighted">Result</span>
      <div>
        <textarea class="textarea" value={result} readonly />
        <button title="Copy" on:click={copy}><Icon name="copy" /></button>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .Page {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fcfcfc;
    // justify-content: center;
    height: calc(100vh - 3.5rem);
    .Content {
      display: flex;
      width: 80%;
      flex-direction: column;
      justify-content: space-between;
      gap: 1rem;
      padding: 1rem;
      .title {
        align-self: center;
      }
      .textarea {
        height: 35vh;
      }
      .TextArea {
        position: relative;
        button {
          position: absolute;
          top: 3rem;
          right: 1rem;
          border: none;
          border-radius: 0.3rem;
          background-color: $primary;
          color: $white;
          min-width: 2.5rem;
          min-height: 2.5rem;
          max-width: 2.5rem;
          max-height: 2.5rem;
          &:hover {
            background-color: $white;
            color: $primary;
            border: 2px solid $primary;
            cursor: pointer;
          }
        }
      }
      .highlighted {
        color: $primary;
      }
    }
  }
</style>
