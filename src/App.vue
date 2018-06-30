<template>
  <div id="app">
    <div class="nav">
      <img src="./assets/logo.png" alt="">
      <ul>
        <li v-for="a in dataList" @click="doThis(a)" :class="{active:a.id == active}">
          {{a.name}}
          <div>
            <div v-for="b in a.children">
              <span>{{b.name}}</span>
            </div>
          </div>
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
            "id":"1",
            "children": [
              {"name":"a","id":"1"},
              {"name":"b","id":"2"},
              {"name":"c","id":"3"}
            ]
          },
          {
            "name":"bbb",
            "id":"2",
            "children": []
          },
          {
            "name":"ccc",
            "id":"3",
            "children": []
          }
        ],
        active:""
      }
    },
    methods: {
      doThis(a){
          this.$router.push({
            path:'/index/'+a.id,
            query:{
              "id":a.id,
              "name": a.name
            }
          });
      }
    },
    watch: {
      '$route'(to,from){
        console.log(to);
        const toDepth = to.query.id;
        this.active = toDepth;
      }
    }
  }
</script>
<style src="./assets/css/common.css"></style>
<style>
  .nav{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #5CA9F7;
  }
  .nav img{
    float: left;
    width: auto;
    height: 50px;
    margin-left: 30px;
  }
  .nav ul{
    height: 50px;
    margin: 0 auto;
    width: 1000px;
  }
  .nav ul li{
    float: left;
    height: 50px;
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
