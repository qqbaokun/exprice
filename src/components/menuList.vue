<template>
  <div class="menu">
    <ul class="clearFloat">
      <li v-for="a in menuList" @click="menuClick($event)">{{a.name}}</li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "menuList",
      props:{
        menuList: [Object,Array]
      },
      methods: {
        menuClick: function (event) {
          var ele = $(event.currentTarget);
          ele.addClass('active');
          ele.siblings().removeClass('active');
        }
      }
    }
</script>

<style scoped>
  .menu ul li{
    float: left;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
  }
  .menu ul li.active{
    background-color: #5CA9F7;
    color: white;
  }
</style>
