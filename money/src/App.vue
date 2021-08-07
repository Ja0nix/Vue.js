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
