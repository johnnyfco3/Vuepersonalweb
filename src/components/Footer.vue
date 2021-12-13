<template>
  <footer>
      <p>Copyright &copy; 2021</p>
      <router-link to="/about">About</router-link> <!--Prevents reload of page-->
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
    a{
        color: #333
    }
    footer{
        margin-top: 30px;
        text-align: center;
    }
</style>