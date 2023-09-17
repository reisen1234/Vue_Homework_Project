<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div>
    <p>
    <h1>普通的button:</h1>
    <button>button</button>
    </p>
    <p>
    <h1>element-plus的button:</h1>
    <el-button>Default</el-button>
    </p>
  </div>
</template>

<script>
  import { ElButton } from 'element-plus'
  export default {
    components: { ElButton },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
