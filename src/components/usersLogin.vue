<template>
  <div>
    这是登录页面
    <input type="text">
    <el-button @click="login">登录</el-button>
  </div>
</template>

<script>
  import {SIGN_IN} from '@/store/mutation-types'

  export default {
    data(){
      return {
        targetUrl:''
      }
    },
    methods:{
      login() {
        this.$store.commit(SIGN_IN)
        if(this.targetUrl){
          this.$router.replace(this.targetUrl)
        }else{
          this.$router.replace({
            name: 'Index'
          });
        }
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm=>{
        vm.targetUrl = to.query.redirect;
      });
    }
  }
</script>