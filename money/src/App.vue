<template>
 <v-app>
   <v-app-bar app flat color="amber darken-1" dark>
        <v-btn to="/dashboard" plain :ripple="false">DASHBOARD</v-btn>
        <v-btn to="/about" plain :ripple="false">ABOUT</v-btn>
    </v-app-bar>
   <v-main>
     <router-view/>
   </v-main>
 </v-app>
</template>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
