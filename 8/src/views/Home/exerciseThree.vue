<template>
    <div v-if="flag">
        <!-- {{ show() }} -->
        <!-- {{ beforeCreate() }} -->
        <!--  {{ created() }} -->
        <div id="msg">{{ msg }}</div>
        <button @click="modify">change</button>
    </div>
    <div v-else>
        <p>this is another page</p>
    </div>
    <button @click="changePage">change page</button>
</template>

<script>
export default {
    data() {
        return {
            msg: "success",
            flag: true,
        }
    },
    methods: {
        show() {
            console.log(this.msg)
        },
        modify() {
            this.timer = setInterval(() => {
                this.msg = Date.now()
                console.log(1)
                /* console.log(this.msg) */
            }, 1000)
            console.log(this.timer)
        },
        changePage(){
            this.flag = !this.flag
        }
    },
    beforeCreate() {
        /* console.log("msg is :" + this.msg)
        this.show() */
    },
    created() {
        /* console.log("msg is :" + this.msg)
        this.show() */
    },
    beforeMount() {
        /* var i = document.getElementById("msg")
        console.log(i) */
    },
    mounted() {
        /* var i = document.getElementById("msg")
        console.log(i) */
    },
    beforeUpdate() {
        /* var i = document.getElementById("msg").innerText
        console.log(i)
        console.log(this.msg) */
    },
    updated() {
        /* var i = document.getElementById("msg").innerText
        console.log(i)
        console.log(this.msg) */
    },
    beforeUnmount() {

    },
    unmounted() {
        clearInterval(this.timer)
        this.timer = null
    },
}
</script>

<style lang="scss" scoped></style>