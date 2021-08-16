<style lang="scss">
  @import "src/styles/common";

  .UserList {
    margin: 1rem;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      :global(a) {
        text-decoration: none;
        color: inherit;
      }

      :global(li) {
        font-size: $text-size-content;
        padding: 1rem;
        cursor: pointer;

        @include border-light;

        &:hover {
          background-color: $color-primary;
          color: white;
        }

        &.active {
          background-color: $color-primary;
          color: white;
        }
      }
    }
  }
</style>

<script>
    import { Link, useParams } from 'svelte-navigator';
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

<div class="UserList">
    <ul>
        {#each users as user}
            <Link to={ `/${user.id}` }>
                <li class:active={ user.id === selectedUser?.id }>
                    { user.first_name } { user.last_name }
                </li>
            </Link>
        {/each}
    </ul>
</div>