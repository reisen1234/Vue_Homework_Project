<template>
    <div>
      {{ count }}
      <br />
      <button @click="add(1)">+1</button>
      <br />
      <button @click="add(2)">+2</button>
      <br />
      <button @click="add(10)">+10</button>
      <br />
      <ol>
        <li v-for="(item, index) in list" :key="index">
          id: {{ item.id }}
          name: {{ item.name }}
          sex: {{ item.sexName }}
        </li>
      </ol>
    </div>
    <button @click="getData(2)">get 2 data</button>
    <button @click="getData2(3)">get 3 data</button>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex'; // 引入 mapState 和 mapActions
  
  export default {
    methods: {
      ...mapActions('moduleB', ['initList']), // 使用模块的命名空间
      add(val) {
        this.$store.commit('moduleA/increment', val); // 使用模块的命名空间
      },
      getData(val) {
        this.initList(val); // 使用映射的 action
      },
      getData2(val) {
        this.initList(val); // 使用映射的 action
      },
    },
    computed: {
    ...mapState('moduleA', {
      count: state => state.count // 访问模块A的count属性
    }),
    ...mapState('moduleB', {
      list: state => state.list // 访问模块B的list属性
    }),
  },
  };
  </script>
  
  <style lang="scss" scoped></style>
  