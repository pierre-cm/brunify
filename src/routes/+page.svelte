<script>
  import he from "he"

  const REGEX = /[ \t]*<\!?\/?\w+[^<>]*>[ \t]*|[ \t]*<!--.*?-->[ \t]*/g

  let html = ""
  let result = ""

  const onInput = (e) => {
    let value = e.target.value
    result = he.decode(value.replace(REGEX, "")).replace(/\n+/g, "\n").trim()
  }
  const copy = () => {
    navigator.clipboard.writeText(result)
  }
</script>

<div class="Page">
  <div class="Content">
    <div class="title is-1">
      HTML code <span class="highlighted">→</span> Raw text
    </div>
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
        <textarea class="textarea" value={result} />
        <button class="button is-primary" title="Copy" on:click={copy}
          >Copy</button
        >
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
          background-color: $primary;
          top: 3rem;
          right: 1rem;
        }
      }
      .highlighted {
        color: $primary;
      }
    }
  }
</style>
