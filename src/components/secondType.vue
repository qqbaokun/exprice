<template>
  <div class="secondType">
    <div style="margin-bottom: 20px;">
      <el-button size="small" @click="addTab(editableTabsValue2)">
        add tab
      </el-button>
    </div>
    <el-tabs v-model="editableTabsValue2" type="border-card" closable @tab-remove="removeTab">
      <el-tab-pane v-for="(item, index) in editableTabs2" :key="item.name" :label="item.title" :name="item.name">
        <component :is=item.content></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
  import thirdType from './thirdType'
  export default {
    name: 'secondType',
    data () {
      return {
        editableTabsValue2: '0',
        editableTabs2: [{
          title: 'Tab 1',
          name: '0',
          content: thirdType
        }],
        tabIndex: 0
      }
    },
    methods: {
      addTab(targetName) {
        console.log(targetName)
        var componentName,url = './';
        if(targetName==1){
          url = url + 'firstType';
        }else if(targetName==2){
          url = url + 'thirdType';
        }else{
          url = url + 'HelloWorld';
        }
        componentName = resolve => require([url+'.vue'],resolve)

        let newTabName = ++this.tabIndex + '';
        this.editableTabs2.push({
          title: url,
          name: newTabName,
          content: componentName
        });
        this.editableTabsValue2 = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs2;
        let activeName = this.editableTabsValue2;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue2 = activeName;
        this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }

</script>

<style>
  .el-tabs__nav .el-tabs__item:first-child span{
    display: none;
  }
</style>
