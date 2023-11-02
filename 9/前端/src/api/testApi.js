import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8899/table-test", // 设置您的 API 基础URL
  timeout: 5000, // 设置请求超时时
});
const testApi = {
  get() {
    return axiosInstance.get("/get");
  },

  post() {
    return axiosInstance.post("/postTest", { id: "123" });
  },
  postJson() {
    const headers = { "Content-Type": "application/json" };
    return axiosInstance.post("/postJson", { name: "reiseen" }, { headers });
  },
};

export default testApi;
