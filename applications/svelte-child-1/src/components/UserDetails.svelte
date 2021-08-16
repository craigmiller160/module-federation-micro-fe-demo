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
    import { subscribe, updateState, getState } from 'globalStore';
    import { afterUpdate, onDestroy } from 'svelte';

    export let users = [];

    const getSelectedUser = createGetSelectedUser();
    $: selectedUser = getSelectedUser(users);
    let notes = '';

    let oldSelectedUser = null;
    $: if (oldSelectedUser !== selectedUser) {
        notes = getState().userNotes?.[selectedUser?.id] ?? '';
        oldSelectedUser = selectedUser;
    }

    const storeUnsubscribe = subscribe((state) => {
        notes = state.userNotes?.[selectedUser?.id] ?? '';
    });

    onDestroy(() => {
        storeUnsubscribe();
    });

    const updateNotes = (text) => updateState((draft) => {
        const userNotes = draft.userNotes ?? {};
        userNotes[selectedUser.id] = text;
        draft.userNotes = userNotes;
    });
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
        <textarea
                value={ notes }
                on:input={ (event) => updateNotes(event.target.value) }
        />
    {/if}
</div>