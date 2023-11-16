<template>
    <div>
        <el-button @click="el_button_click">el_button</el-button><br/>
        catch enter:<input @keypress.enter="catch_enter"/><br/>
        catch tab:<input @keydown="catch_tab"/><br/>
        catch direction:<input @keydown="catch_direction"/><br/>
        normal:
        <div @click="father_cick" class="father_div">
            <button @click="child_click">normal click</button><br/>
        </div>
        v-on stop:
        <div @click="father_cick" class="father_div">
            <button @click.stop="child_click">v-on stop</button><br/>
        </div>
        v-on cpture:
        <div @click.capture="father_cick" class="father_div">
            <button @click="child_click">v-on capture</button><br/>
        </div>
        v-on self
        <div @click.self="father_cick" class="father_div">
            <button @click="child_click">v-on self</button><br/>
        </div>
        v-on once
        <div @click.once="father_cick" class="father_div">
            <button @click="child_click">v-on once</button><br/>
        </div>
        normal:
        <form @submit="prevent_submit">
            <input type="submit"/>
        </form>
        v-on prevent:
        <form @submit.prevent="prevent_submit">
            <input type="submit"/>
        </form>
        <h2>filter example:</h2>
        <div>
            <input v-model="filter_value" />
            <p>filter_value:{{filter_value_reverse}}</p>
        </div>
        <div>
            Pirates name:<input v-model="Pirates_name"/>
            <ol>
                <li v-for="member in members" :key="member.name">
                    {{front}}-{{member.name}}
                </li>
            </ol>
        </div>
        <div>
            number:<input v-model="number" type="number"/><br/>
            price:<input v-model="price" type="number"/><br/>
            total_price:{{total_price}}
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            filter_value:"fiter value",
            Pirates_name:"op-name",
            front:"op-name",
            members:[
                {name:"sl"},
                {name:"nm"}
            ],
            price:0,
            number:0,
        }
    },
    methods:{
        el_button_click(){
            alert("el_button_click")
        },
        catch_enter(){
            alert("enter press")
        },
        catch_tab(){
            alert("tab press")
        },
        catch_direction(event){
            if(event.keyCode >= 37 && event.keyCode <= 40){
                switch(event.keyCode){
                    case 37:
                        alert("Press left")
                        break
                    case 38:
                        alert("Press Up")
                        break
                    case 39:
                        alert("Press Right")
                        break
                    case 40:
                        alert("Press Down")
                }
            }
        },
        father_cick(){
            console.log("father div click")
        },
        child_click(){
            console.log("child click")
        },
        value_change(event){
            console.log(event)
        },
    },
    computed:{
        filter_value_reverse(){
            if(this.filter_value !== ""){
                return this.filter_value.split("").reverse().join("").trim();
            }
            return this.filter_value
        },
        total_price(){
            return this.price * this.number;
        }
    },
    watch:{
        Pirates_name(val){
            this.front = val
        }
    }
}
</script>
<style scoped>
.father_div{
    background-color: aqua;
}
</style>