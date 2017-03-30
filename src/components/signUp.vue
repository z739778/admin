<style scoped>
.signin {
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: auto;
}
</style>
<template>
  <div class="signin">
    这是注册页面
    <input type="text" placeholder="请输入用户名" v-model="name">
    <input type="password" placeholder="请输入密码" v-model="password">
    <el-button @click="login" type="primary">注册</el-button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        targetUrl:'',
        name:'',
        password:''
      }
    },
    methods:{
      login() {
        this.$http.post('http://localhost:3000/api/signup',{
          // params:{
            name:this.name,
            password:this.password
          // }
        }).then((res)=>{
          if (res.data.code===200) {
            this.$router.push({
              name:'Index'
            })
          }
        })
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm=>{
        vm.targetUrl = to.query.redirect;
      });
    }
  }
</script>