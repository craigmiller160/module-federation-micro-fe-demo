<style lang="scss">
  .Content {
    display: flex;
    flex-direction: column;
    background-color: lightgreen;
    border: 3px solid darkgreen;
    border-radius: 5px;

    .title {
      display: flex;
      flex-direction: row;
      justify-content: center;

      h1 {
        text-align: center;
      }
    }

    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
</style>

<div class="Content">
    <div class="title">
        <h1>Svelte Child 1</h1>
    </div>
</div>