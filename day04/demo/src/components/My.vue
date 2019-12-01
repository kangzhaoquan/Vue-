<template>
  <div>这里是我的
    <router-view></router-view>
  </div>
 
</template>

<script>
import Login from "./login";
export default {
  components:{
    Login
  },
  data() {
    return {
      name: 123
    };
  },
  created() {
    // console.log("singer", this);
    // console.log("router", this.$router);
    console.log("route", this.$route);
  }
};
</script>

<style>
</style>