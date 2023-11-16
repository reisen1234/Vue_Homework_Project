<template>
  <h2 v-bind:class="{ active: isActive }" v-show="isShow">{{ message }}</h2>
  <input v-on:keydown="listenKey" readonly />
  <button v-on:click="btnClick">颜色按钮</button>
  <p>{{ data }}</p>
  <el-button v-on:click="changeShow" type="primary">Show text</el-button>
  <img src="../../assets/logo.png" :title="myMethod()" />
  <ol>
    <li v-for="site in sites" :key="site">
      {{ site.name }}
    </li>
  </ol>
  <div @click.once="fatherStop">
    <button @click="textStop">textStop</button>
  </div>
  <form v-on:submit.prevent>
    <input type="submit" />
  </form>

</template>
<script>
export default {
  data() {
    return {
      isActive: false,
      message: "hello vue",
      isShow: true,
      data: "什么都没有按下",
      sites: [{ name: "reisen" }, { name: "nahida" }, { name: "kokomi" }],
    };
  },
  methods: {
    btnClick() {
      this.isActive = !this.isActive;
    },
    myMethod() {
      return "hello xmut";
    },
    listenKey(e) {
      e.preventDefault();
      switch (e.key) {
        case "Enter":
          this.data = "按下了回车";
          break;
        case "Tab":
          this.data = "按下了Tab";
          break;
        case "ArrowUp":
          this.data = "按下了方向键上";
          break;
        case "ArrowDown":
          this.data = "按下了方向键下";
          break;
        case "ArrowRight":
          this.data = "按下了方向键右";
          break;
        case "ArrowLeft":
          this.data = "按下了方向键左";
          break;
        default:
          this.data = "其他按键";
      }
    },
    changeShow() {
      this.isShow = !this.isShow;
    },
    fatherStop() {
      console.log("i am father");
    },
    textStop() {
      console.log("i am child");
    },
  },
};
</script>
<style>
.active {
  color: red;
}
</style>