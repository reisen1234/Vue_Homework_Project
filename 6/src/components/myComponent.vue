<template>
    <div>
        <!-- <subComponent @custom-event="handleCustomEvent" />
        <subComponent :numberProp="120"/> -->
        <subComponent v-model="parentValue" @update:value="handleUpdateValue" />
        {{ parentValue }}
    </div>
</template>

<script >
import subComponent from './subComponent.vue';
export default {
    data() {
        return {
            parentValue: 'Initial value from parent',
        }
    },
    components: {
        subComponent
    },
    methods: {
        handleUpdateValue(newValue) {
            // 处理子组件触发的事件
            console.log('Received Update:', newValue);
        },
    }
}
</script>

<style lang="scss" scoped></style>