<template>
  <nav class="navbar has-shadow">
      <div class="container">
        <router-link to="/category/front-end" >
          <img src="http://bit.ly/vue-img"
            alt="my-vue-spa" />
        </router-link>
        <router-link class="navbar-item is-tab" to="/category/front-end" >Front-end</router-link>
        <router-link class="navbar-item is-tab" :to="{ name: 'category', params: { id: 'mobile' } }" >Mobile</router-link>
        <router-link class="navbar-item is-tab" to="/login" >Login</router-link>
      </div>
    </nav>
</template>
