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
            <button @click="modify(a,index)">修改</button>
          </td>
        </tr>
        <tr>
          <td colspan="3"><button @click="add()">增加</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
  import dialogDefault from "./dialog/dialogDefault";
  export default {
    name: 'firstType',
    data (){
      return {
        "list": [
          {"name":"a",id:1},
          {"name":"b",id:2},
          {"name":"c",id:3}
        ],
        "menu":[
          {"name":"a",id:1},
          {"name":"b",id:2},
          {"name":"c",id:3}
        ]
      }
    },
    methods:{
      add:function(){
        var self = this;
        this.$vDialog.modal(dialogDefault,{
          params:{},
          title:"添加",
          width: 400,
          height: 300,
          dialogCloseButton: true,
          dialogMaxButton: false,
          callback: function (data) {
            self.list.push(data);
          }
        });
      },
      del:function (index) {
        this.list.splice(index,1)
      },
      modify:function (a,index) {
        var self = this;
        this.$vDialog.modal(dialogDefault,{
          params: a,
          title:"修改",
          width: 400,
          height: 300,
          dialogCloseButton: true,
          dialogMaxButton: false,
          callback: function (data) {
            self.$set(self.list,index,data);
          }
        });
      }
    }
  }

</script>

<style scoped>
  .firstType{

  }
  table{
    margin: 20px auto;
    width: 400px;
  }
  table,table tr th,table tr td {
    border:1px solid #f0f0f0;
    height: 30px;
    vertical-align: middle;
    text-align: center;
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
