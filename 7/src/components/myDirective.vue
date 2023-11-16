<template>
    <div>
        <input type="text" v-focus />
    </div>
</template>

<script>
const defineDir = {
    focus: {
        mounted: (el, binding) => {
            console.log(binding)
            el.focus()
        }
    }
}
export default {
    directives: defineDir,
    setup() { }
}
</script>

<style lang="scss" scoped></style>