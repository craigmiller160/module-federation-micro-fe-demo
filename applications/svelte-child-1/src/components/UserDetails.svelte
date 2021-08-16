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
    import { useParams } from 'svelte-navigator';
    import { onDestroy } from 'svelte';

    const params = useParams();

    export let users = [];
    let oldUsers = [];

    let userId = 0;
    let selectedUser = null;
    const paramsUnsubscribe = params.subscribe((paramDetails) => {
        userId = paramDetails.userId ? parseInt(paramDetails.userId) : 0;
    });

    $: if (users !== oldUsers) {
        selectedUser = users.find((user) => user.id === userId);
    }

    oldUsers = users;

    onDestroy(() => {
        paramsUnsubscribe();
    });
</script>

<div class="UserDetails">
    {#if selectedUser !== null}
        <img src={ selectedUser?.avatar } alt="avatar" />
    {/if}
    <p>
        <strong>Name: </strong>
        { selectedUser?.first_name } { selectedUser?.last_name }
    </p>
    <p>
        <strong>Email: </strong>
        { selectedUser?.email }
    </p>
    <span>
        <strong>Notes:</strong>
    </span>
    {#if selectedUser !== null}
        <textarea></textarea>
    {/if}
</div>