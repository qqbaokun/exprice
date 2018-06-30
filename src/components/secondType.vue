<template>
  <div class="secondType">{{msg}}</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'secondType',
  data () {
    return {
      msg: 'secondType'
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
  .secondType{

  }
</style>
