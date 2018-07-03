<template>
  <div class="dialogDefault form-horizontal panel-body">
    <div class="form-group">
      <label class="col-sm-2 control-label text-right">name:</label>
      <div class="col-sm-4">
        <input class="form-control" type="text" v-model="params.name">
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label text-right">id:</label>
      <div class="col-sm-4">
        <input class="form-control" type="text" v-model="params.id">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-2"></div>
      <div class="col-sm-4">
        <button class="btn btn-success" @click="closeDialog(params)">button</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "dialogDefault",
      props: ['params'],
      data(){
        return {

        }
      },
      methods: {
        closeDialog(params){
          this.$vDialog.close(params)
        }
      }
    }
</script>

<style scoped>
 .dialogDefault{

 }
</style>
