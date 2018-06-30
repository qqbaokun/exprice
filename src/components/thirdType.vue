<template>
  <div class="thirdType">{{msg}}</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'thirdType',
  data () {
    return {
      msg: 'thirdType'
    }
  },
  methods:{
      doSome(){

      }
  },
  created (){
      this.doSome()
  }
}

</script>

<style>
  .thirdType{

  }
</style>
