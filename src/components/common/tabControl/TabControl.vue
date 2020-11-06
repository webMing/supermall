<template>
  <div class="tab-control">
     <div v-for="(title,index) in titles" :key="title" @click="changeSelect(index)">
        <span :style="currentIndex === index?hiStyle:deStyle" >{{title}}</span>
     </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            currentIndex:0,
            hiStyle:{
                color:this.hilightColor,
                "border-bottom":"2px solid " + this.hilightColor
            },
            deStyle:{
                color:this.defaultColor,
                "border-bottom":"none"
            }
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
        changeSelect(index){
            this.currentIndex = index
        },
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
    text-align: center;
}
.tab-control span {
    padding-bottom: 5px;
}

</style>