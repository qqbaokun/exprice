<template>
  <div class="firstType">
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>id</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(a,index) in list">
          <td>{{a.name}}</td>
          <td>{{a.id}}</td>
          <td>
            <button @click="del(index)">删除</button>
            <button @click="modify(index)">修改</button>
          </td>
        </tr>
        <tr>
          <td>
            <input type="text" v-model="obj.name">
          </td>
          <td>
            <input type="text" v-model="obj.id">
          </td>
          <td><button @click="add(obj)">增加</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'firstType',
    data (){
      return {
        "list": [
          {"name":"a",id:1},
          {"name":"b",id:2},
          {"name":"c",id:3}
        ],
        "obj":{

        }
      }
    },
    methods:{
      add:function(obj){
        if(!obj.name){
          alert('请填写name');
          return false;
        }
        if(!obj.id){
          alert('请填写id');
          return false;
        }
        this.list.push(obj);
        this.obj = {};
        this.$nextTick(function(){
          console.log('v-for渲染已经完成');
        })
      },
      del:function (index) {
        this.list.splice(index,1)
      },
      modify:function (index) {
        this.list[index] = this.obj;
        this.obj = {};
      }
    }
  }

</script>

<style>
  .firstType{

  }
  .firstType table{
    margin: 20px auto;
    width: 400px;
  }
  table,table tr th, table tr td {
    border:1px solid #f0f0f0;
    height: 30px;
    vertical-align: middle;
  }
  table tr td button{
    color: #5CA9F7;
  }
  table tr td input{
    padding: 0 10px;
    width: 100px;
    border:1px solid #f0f0f0;
  }
  table {
    text-align: center;
    border-collapse: collapse;
  }
</style>
