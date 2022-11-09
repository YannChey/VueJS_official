<template>
  <div id="app">
    <img alt="logo spiruline" src="https://previews.123rf.com/images/epine/epine1606/epine160600092/58901111-spiruline-tir%C3%A9-par-la-main-vecteur-isolated-%C3%A9tiquette-d-algues-spiruline-sur-fond-blanc-superfood-gr.jpg">
    <h2>Que voulez-vous faire ?</h2>
    <nav>
      <router-link to="/supplier">Liste des fournisseurs</router-link>
      <router-link to="/map">Voir la carte</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

}

nav a {
  color: #2c3e50;
  padding:10px;
  background-color: #c3c3e5;
  margin:5px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

img{
  max-height: 200px;
}
</style>

<!--<template>-->
<!--  <div id="app">-->
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--    <SuppliersList msg="h1"/>-->
<!--    <SuppliersMap msg="h1"/>-->
<!--    <nav>-->
<!--      <ul>-->
<!--        <li v-on:click="onSuppliersListClick">Liste commercants</li>-->
<!--        <li v-on:click="onMapClick">Carte</li>-->
<!--      </ul>-->
<!--    </nav>-->

<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import SuppliersList from "@/components/SuppliersList";-->
<!--import SuppliersMap from "@/components/SuppliersMap";-->
<!--import Vue from 'vue'-->
<!--import VueRouter from 'vue-router'-->

<!--Vue.use(VueRouter)-->


<!--export default {-->
<!--  name: 'App',-->
<!--  components: {-->
<!--    SuppliersMap,-->
<!--    SuppliersList,-->
<!--    HelloWorld-->
<!--  },-->
<!--  methods: {-->
<!--    onSuppliersListClick : function(){-->
<!--      alert("Vous avez cliqué sur la liste des fournisseurs");-->
<!--    },-->
<!--    onMapClick : function(){-->
<!--      alert("Vous avez cliqué sur la carte");-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--  margin-top: 60px;-->
<!--}-->

<!--ul{-->
<!--  display:flex;-->
<!--  justify-content: center;-->
<!--}-->

<!--ul li{-->
<!--  list-style: none;-->
<!--  border : 1px solid black;-->
<!--  padding:10px;-->
<!--  margin:10px;-->
<!--}-->
<!--</style>-->
