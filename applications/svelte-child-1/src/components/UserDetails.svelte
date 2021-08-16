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
    import { createGetSelectedUser } from './createGetSelectedUser';

    export let users = [];

    const getSelectedUser = createGetSelectedUser();
    $: selectedUser = getSelectedUser(users);
</script>

<div class="UserDetails">
    {#if selectedUser !== null}
        <img src={ selectedUser?.avatar } alt="avatar" />
    {/if}
    <p>
        <strong>Name: </strong>
        { selectedUser?.first_name ?? '' } { selectedUser?.last_name ?? '' }
    </p>
    <p>
        <strong>Email: </strong>
        { selectedUser?.email ?? '' }
    </p>
    <span>
        <strong>Notes:</strong>
    </span>
    {#if selectedUser !== null}
        <textarea></textarea>
    {/if}
</div>