<template>
    <div>
        This is home
        <div>
            <h1>用户信息</h1>
            <p>用户ID: {{ userId }}</p>
            <p>用户名: {{ username }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userId: null,
            username: null,
        };
    },
    beforeRouteUpdate(to, from, next) {
        console.log("beforeRouteUpdate triggered");
        this.userId = to.params.id;
        this.username = to.params.username;
        next();
    },
    
}
</script>

<style lang="scss" scoped></style>