import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import "./assets/main.css";
/* import * as echarts from "echarts";
import router from "./router"; */
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 引入jQuery、bootstrap
const app = createApp(App);

app.use(ElementPlus);
app.use(ElementPlus, {
    locale: zhCn,
  })
app.mount("#app");
