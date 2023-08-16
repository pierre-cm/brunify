<script>
  const REGEX = /[ \t]*<\!?\/?\w+[^<>]*>[ \t]*|[ \t]*<!--.*?-->[ \t]*/g

  let html = ""
  let result = ""

  const onInput = (e) => {
    let value = e.target.value
    result = value.replace(REGEX, "").replace(/\n+/g, "\n").trim()
  }
</script>

<div class="Page">
  <div class="Content">
    <h1 class="title is-1">
      HTML code <span class="highlighted">→</span> Raw text
    </h1>
    <div>
      <span class="label highlighted">HTML code</span>
      <textarea
        class="textarea"
        placeholder="HTML code"
        value={html}
        on:input={onInput}
      />
    </div>

    <div>
      <span class="label highlighted">Result</span>
      <textarea class="textarea" value={result} />
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
    height: 100vh;
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
      .highlighted {
        color: $primary;
      }
    }
  }
</style>
