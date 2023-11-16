<template>
    <div>
        This is myRouter page
        <button @click="switchs">切换路由</button>
        <router-link :to="{ name: 'home', params: { id: 1, username: 'user1' } }">User 1</router-link>
        <router-link :to="{ name: 'home', params: { id: 2, username: 'user2' } }">User 2</router-link>
        <button @click="navigateToUser(3, 'user3')">User 3</button>
        <p>
            <router-link :to="{ name: 'register' }">register</router-link><br/>
            <router-link :to="{ name: 'login' }">login</router-link>
        </p>
    </div>
</template>
  
<script>
export default {
    methods: {
        switchs() {
            this.$router.push({ name: 'home', params: { id: 4, username: 'user4' } });
        },
        navigateToUser(id, username) {
            console.log("User button clicked");
            this.$router.push({ name: 'home', params: { id, username } });
        },
    },
    /*     beforeRouteUpdate(to, from, next) {
            console.log("beforeRouteUpdate triggered");
            this.userId = to.params.id;
            this.username = to.params.username;
            next();
        }, */
    /* beforeRouteLeave(to, from, next) {
        // 在用户离开当前路由时执行逻辑
        // 可以进行一些清理操作或提醒用户
        if (confirm("Are you sure you want to leave this page?")) {
            next(); // 用户确认后继续导航
        } else {
            next(false); // 取消导航
        }
    } */
};
</script>
  