<template>
  <div class="dialogDefault form-horizontal panel-body">
    <vue-form :state="myForm" show-messages="$dirty || $submitted">
      <validate>
        <div class="form-group">
          <label class="col-sm-2 control-label text-right">name:</label>
          <div class="col-sm-10">
            <input name="name" class="form-control" type="text" placeholder="name" v-model="user.name" required>
            <field-messages name="name">
              <div slot="required"><span class="form-info">Name is a required field</span></div>
            </field-messages>
          </div>
        </div>
      </validate>
      <validate>
        <div class="form-group">
          <label class="col-sm-2 control-label text-right">id:</label>
          <div class="col-sm-10">
            <input name="id" class="form-control" type="text" placeholder="id" v-model="user.id" required pattern="^1[345789]\d{9}$">
            <field-messages name="id">
              <div slot="required"><span class="form-info">id is a required field</span></div>
              <div slot="pattern"><span class="form-info">格式错误</span></div>
            </field-messages>
          </div>
        </div>
      </validate>

      <!--<validate>
        <div class="form-group">
          <label class="col-sm-2 control-label text-right">isOk:</label>
          <div class="col-sm-10">
            <select name="isOk" v-model="user.isOk" class="form-control" required>
              <option :value="null">&#45;&#45;请选择&#45;&#45;</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <field-messages name="isOk">
              <div slot="required"><span class="form-info">isOk is a required field</span></div>
            </field-messages>
          </div>
        </div>
      </validate>-->

      <div class="form-group">
        <div class="col-sm-2"></div>
        <div class="col-sm-4">
          <button class="btn btn-success" @click="closeDialog(user)" type="button">button</button>
        </div>
      </div>
    </vue-form>
  </div>
</template>

<script>
    export default {
      name: "dialogDefault",
      props: ['params'],
      data(){
        return {
          myForm: {},
          user:{
            isOk:null
          }
        }
      },
      mounted(){
        this.formValidate = false
      },
      methods: {
        closeDialog(user){
          if(!this.myForm.$invalid){
            this.$vDialog.close(user)
          }else {
            this.myForm.$submitted = true;
          }
          console.log(this.myForm.$invalid)
        }
      },
      created(){
        var obj = Object.assign({},this.params);
        this.user = obj;
      }
    }
</script>

<style scoped>
 .form-info{
   color: red;
 }
</style>
