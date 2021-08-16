<style lang="scss">
  @import "src/styles/common";

  .Content {
    display: flex;
    flex-direction: column;
    background-color: $color-secondary;

    @include border-heavy;

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

<script>
    import { Route, useLocation, useNavigate } from 'svelte-navigator/src/index';
    import UserList from './UserList.svelte';
    import UserDetails from './UserDetails.svelte';
    import axios from 'axios';
    import { onMount } from 'svelte';

    let users = [];

    const navigate = useNavigate();
    const location = useLocation();
    location.subscribe((locationDetails) => {
        if (locationDetails.pathname === '/') {
            navigate('/0');
        }
    });

    onMount(() => {
        axios.get('https://reqres.in/api/users')
            .then((res) => {
                users = res.data.data;
            })
            .catch((ex) => console.error(ex));
    });
</script>

<div class="Content">
    <div class="title">
        <h1>Svelte Child 1</h1>
    </div>
    <Route path="/:userId">
        <div class="content">
            <UserList users={ users } />
            <UserDetails users={ users } />
        </div>
    </Route>
</div>