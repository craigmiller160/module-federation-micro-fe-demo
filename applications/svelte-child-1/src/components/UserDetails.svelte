<style lang="scss">
  @import "src/styles/common";

  .UserDetails {
    margin: 1rem;
    padding: 2rem;
    font-size: $text-size-content;

    @include border-light;

    :global(textarea) {
      width: 100%;
      height: 10rem;
      resize: none;
    }
  }
</style>

<script>

</script>

<div class="UserDetails">
    <p>
        <strong>Name: </strong>
    </p>
</div>