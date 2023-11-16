<template>
    <div>
        <input  v-model="childValue"/>
        <!-- <button @click="emitCustomEvent">Emit Custom Event</button> -->
        {{ childValue }}
    </div>
</template>
  
<script>
/* import { defineProps } from 'vue'; */
export default {
    methods: {
        emitCustomEvent() {
            // 触发名为 'custom-event' 的自定义事件，并传递数据
            this.$emit('custom-event', 'Some data to pass to the parent');
        },
    },
    props :{
        value:String
    },
    computed: {
        childValue:{
            get(){
                return this.value
            },
            set(newValue){
                console.log('New Value:', newValue);
                this.$emit('update:value', newValue);
            }
        }
    }
}
// eslint-disable-next-line no-unused-vars
/* const prop = defineProps({
    textProp: String,
    numberProp: {
        type: Number,
        validator: (value) => value > 100
    },
    objectProp: Object,
    arrayProp: Array
}); */
</script>
  
<style lang="scss" scoped></style>
  