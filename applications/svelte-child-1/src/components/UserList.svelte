<style lang="scss">
  a {
    text-decoration: none;
    color: inherit;
  }

  .UserList {
    margin: 1rem;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        font-size: 1.5rem;
        border: 1px solid darkgreen;
        padding: 1rem;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
          background-color: darkgreen;
          color: white;
        }

        &.active {
          background-color: darkgreen;
          color: white;
        }
      }
    }
  }
</style>

<script>
    import { Link, useParams } from 'svelte-navigator';

    let userId = 0;
    const params = useParams();
    params.subscribe((paramDetails) => {
        userId = paramDetails.userId ? parseInt(paramDetails.userId) : 0;
    });

    export let users = [];
</script>

<div class="UserList">
    <ul>
        {#each users as user}
            <Link to={ `/${user.id}` }>
                <li class:active={ user.id === userId }>
                    { user.first_name } { user.last_name }
                </li>
            </Link>
        {/each}
    </ul>
</div>