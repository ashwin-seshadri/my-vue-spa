<template>
  <nav class="navbar has-shadow">
      <div class="container">
        <router-link to="/category/front-end" >
          <img src="http://bit.ly/vue-img"
            alt="my-vue-spa" />
        </router-link>
        <router-link class="navbar-item is-tab" to="/category/front-end" >Front-end</router-link>
        <router-link class="navbar-item is-tab" :to="{ name: 'category', params: { id: 'mobile' } }" >Mobile</router-link>
        <router-link class="navbar-item is-tab" to="/login" >
          <span v-if="isAuthenticated">Logout</span><span v-else>Login</span>
        </router-link>
      </div>
    </nav>
</template>
<script>
// import eventBus from '../event-bus.js';
/* export default {
  data(){
    return {
      isAuthenticated : false
    };
  },
  created(){
    eventBus.$on('authStatusUpdate', isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    })
  }
} */
import { mapGetters } from 'vuex';

export default {
  computed:{
    ...mapGetters(['isAuthenticated'])
  }
}

</script>
