<template>
  <div class="thirdType">
    <el-table
      :data="tableData"
      border
      height="250"
      cell-class-name="text-center"
      :header-cell-class-name="headCell"
      @selection-change="changeFun"
      style="width: 100%">
      <el-table-column type="selection" width="40"></el-table-column>
      <el-table-column prop="date" label="日期">
        <template slot-scope="scope">
          <el-date-picker v-model="scope.row.date" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名">
        <template slot-scope="scope">
          <el-popover
            placement="right"
            width="200"
            trigger="hover"
            :content="scope.row.name">
            <span slot="reference">{{scope.row.name}}</span>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址">
        <template slot-scope="scope">
          <el-tooltip :content="scope.row.address" placement="right">
            <span>{{scope.row.address}}</span>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="left">
      <el-button>上左</el-button>
    </el-tooltip>


  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'thirdType',
  data () {
    return {
      input:'',
      multipleSelection: [],
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  methods:{
      doSome(){

      },
      changeFun(val) {
        this.multipleSelection = val;
        console.log(val);
      },
      headCell(row, column, rowIndex, columnIndex){
        if(row.columnIndex == 0){
          row.row[0].className="text-center"
        }
      }
  },
  created (){
      this.doSome()
  }
}

</script>

<style>
  .thirdType{
    width: 800px;
    margin: 50px auto;
  }
  .text-center{
    text-align: center!important;
  }


</style>
