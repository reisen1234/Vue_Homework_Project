<template>
    <div>
        <button @click="sendGet()">发送GET请求</button><br />
        <button @click="sendPost()">发送post请求</button><br />
        <button @click="sendPostJson()">发送postjson请求</button>
    </div>
</template>

<script>
import api from '../api/testApi'
export default {
    methods: {
        sendGet() {
            console.log(api.get())
        },
        sendPost() {
            console.log(api.post())
        },
        sendPostJson() {
            console.log(api.postJson())
        }
    }
}
</script>

<style lang="less" scoped></style>