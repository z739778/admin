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
    这是登录页面
    <input type="text" placeholder="请输入用户名" v-model="name">
    <input type="password" placeholder="请输入密码" v-model="password">
    <el-button @click="login" type="primary">登录</el-button>
  </div>
</template>

<script>
  import {SIGN_IN} from '@/store/mutation-types'

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
        this.$http.post('http://localhost:3000/api/signin',{
          // params:{
            name:this.name,
            password:this.password
          // }
        }).then((res)=>{
          if (res.data.code===200) {
            this.$store.commit(SIGN_IN)
            if(this.targetUrl){
              this.$router.replace(this.targetUrl)
            }else{
              this.$router.replace({
                name: 'Index'
              })
            }
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