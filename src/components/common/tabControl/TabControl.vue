<template>
  <div class="tab-control">
     <div v-for="(title,index) in titles" :key="title">
        <span :style="{color:textColor(index)}" >{{title}}</span>
     </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            currentIndex:0
        }
    },
    props:{
        titles:{
            type:Array,
            default:()=>{
                return []
            }
        },
        defaultColor:{
            type:String,
            default:"#000000"
        },
        hilightColor:{
            type:String,
            default:"#FFC0CB"
        }
    },
    methods:{
        textColor(index){
            return this.currentIndex === index ? this.hilightColor : this.defaultColor
        }
    },
    computed:{
        
    }
}
</script>

<style>
.tab-control {
    display: flex;
}
.tab-control div {
    flex: 1;
}
</style>