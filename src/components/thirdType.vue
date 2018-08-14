<template>
  <div class="thirdType">
    <el-table
      :data="tableData"
      border
      height="400"
      cell-class-name="text-center"
      :header-cell-class-name="headCell"
      @selection-change="changeFun"
      style="width: 100%">
      <el-table-column type="selection" width="40"></el-table-column>
      <el-table-column prop="date" label="日期">
        <template slot-scope="scope">
          <span>{{scope.row.date}}</span>
          <el-popover
            placement="right"
            width="auto"
            trigger="hover"
            :content="scope.row.date">
            <el-date-picker v-model="scope.row.date" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
            <!--<el-row>
              <el-col :span="24" v-for="(item,index) in options" :key="index"><div class="grid-content bg-purple-dark">{{item.label}}</div></el-col>
            </el-row>-->
            <span slot="reference">
              <i class="el-icon-edit"></i>
            </span>
          </el-popover>
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

    <el-pagination
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="1000">
    </el-pagination>

    <!--<el-button type="primary" @click="save">主要按钮</el-button>-->
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
      }],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
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
      },
      save(){
        console.log(this.multipleSelection)
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
