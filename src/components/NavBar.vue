<template>
    <nav class="navbar is-link navbar-my-style" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">
            <img src="../imgs/logo-small.png" />
          </router-link>
        </div>
        <div v-if="userIsLoggedIn" class="user-logout">
          <button @click="logout" class="button is-info is-inverted is-outlined is-small">Logout</button>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import { LOGOUT_USER } from '../modules/user.module'


export default {
  computed: {
    ...mapGetters([
      'userIsLoggedIn',
    ])
  },
  methods: {
    logout(){
      this.$store.dispatch({type: LOGOUT_USER})
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
  }
  .user-logout{
    margin-right: 10px;;
  }
</style>
