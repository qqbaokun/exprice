<template>
  <div id="app">
    <div class="nav">
      <img src="./assets/logo.png" alt="">
      <ul class="clearFloat">
        <li v-for="a in dataList" @click="doThis(a)" :class="{active:'/'+a.id == $route.path}">
          {{a.name}}
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'App',
    data (){
      return {
        dataList: [
          {
            "name":"增删查改",
            "id":"1"
          },
          {
            "name":"bbb",
            "id":"2"
          },
          {
            "name":"ccc",
            "id":"3"
          }
        ],
        active:"",
        params:{}
      }
    },
    methods: {
      doThis(a){
          this.$router.push({
            path:'/'+a.id,
            query:{
              "id":a.id,
              "name": a.name
            }
          });
      },

    },
    watch: {
      '$route'(to,from){
        // console.log(to);
        // const toDepth = to.path.split('')[1];
        // this.active = toDepth;
        // console.log(this.$route.path)
      }
    }
  }
</script>
<style src="./assets/css/bootstrap.min.css"></style>
<style src="./assets/css/common.css"></style>
<style scoped>
  .nav{
    width: 100%;
    border-bottom: 1px solid #5CA9F7;
  }
  .nav img{
    float: left;
    width: auto;
    height: 50px;
    margin-left: 30px;
  }
  .nav ul{
    margin: 0 auto;
    width: 1000px;
  }
  .nav ul li{
    float: left;
    line-height: 50px;
    cursor: pointer;
    width: 100px;
    text-align: center;
  }
  .nav .active{
    background-color: #5CA9F7;
    color: white;
  }
</style>
