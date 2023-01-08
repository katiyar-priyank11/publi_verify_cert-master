<template>
  <div class="page">
    <LoginNavBar />
    <div class="certificate">
      <div id="fr"><NavFeature /></div>
      <div class="frm">
        <div><input type="text" placeholder="Roll No" v-model="rollNo" /></div>
        <div><button v-on:click="delCert()">Delete</button></div>
      </div>
    </div>
  </div>
</template>
<script>
import LoginNavBar from "./LoginNavBar.vue";
import NavFeature from "./NavFeature.vue";
import axios from "axios";
export default {
  name: "RemoveCert",
  components: {
    LoginNavBar,
    NavFeature,
  },
  data() {
    return {
      rollNo: "",
    };
  },
  methods: {
    async delCert() {
      let result = await axios.delete(
        `http://localhost:4000/certs/certs/${this.rollNo}`
      );
      if (result.status == 200) {
        alert("Certificate Deleted");
      }
      localStorage.setItem("user-info", JSON.stringify(result.data));
      this.$router.push({ name: "AddCert" });
    },
  },
};
</script>
<style scoped>
.certificate {
  display: flex;
  height: 90vh;
}
#fr {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0.8;
}
.frm{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
}
button{
  padding: 10px;
  padding-left: 50px;
  padding-right: 50px;
}
@media only screen and (max-width: 668px) {
  .certificate{
    flex-direction: column;
  }
}
</style>