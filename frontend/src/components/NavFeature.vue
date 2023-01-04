<template>
  <div>
    <div class="ftr"><router-link to="/AddCert">Add a certificate</router-link></div>
    <div class="ftr">
      <router-link to="/remove">Delete a certificate</router-link>
    </div>
    <div class="ftr">
      <router-link to="/update">Update a certificate</router-link>
    </div>
    <div class="ftr">
      <router-link to="/viewAll">View issued certificates</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavFeatures",
  components:{
  }
}
</script>

<style>
.ftr{
  padding: 20px;
  border: solid 1px rgb(234, 231, 228);
  background-color: rgb(218, 216, 214);
  border-radius: 10px;
  margin:2.5px;
  padding-left: 50px;
  padding-right: 50px;
}

</style>