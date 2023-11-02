<template>
  <h2 v-bind:class="{ active: isActive }" v-show="isActive">{{ message }}</h2>
  <button v-on:click="btnClick">按钮</button>
  <img src="../../assets/logo.png" :title="myMethod()"/>
  <ol>
    <li v-for="site in sites" :key="site">
      {{ site.name }}
    </li>
  </ol>
</template>
<script>
export default {
  data() {
    return {
      isActive:false,
        currentIndex:-1,
       message:'hello vue',
       sites:[
        {name:'reisen'},
        {name:'nahida'},
        {name:'kokomi'}
       ]
    };
  },
  methods:{
    btnClick(e){
        this.isActive = !this.isActive;
        this.currentIndex = e;
    },
    myMethod(){
      return 'hello xmut'
    }
  }
};
</script>
<style>
.active {
  color: red;
}
</style>