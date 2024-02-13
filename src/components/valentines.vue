<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const counter =  ref(1)
const width = ref(200)

const router = useRouter()

function proceed(){
    router.push('/lesgooo')
}

function enlarge(){
    counter.value += 1;
}

let computedWidth = computed(()=>{
    return (width.value + counter.value * 5) + 'px'
})

</script>

<template>
    <div class="container">
        <div class="message">
            <h1>Will you always be my valentine?</h1>
            <button class="yes btn" :style="{height:computedWidth, width:computedWidth}" @click="proceed">YES</button>
            <button class="no btn" @click="enlarge">NO</button>
        </div>
    </div>
</template>

<style scoped>
    .container {
        height: 100vh;
        background-color: var(--violet-color);

        display: flex;
        justify-content: center;
        align-items: center;

        color: white;
        text-align: center;
    }

    .message{
        animation-name: ease;
        animation-duration: 2s;
    }

    .btn{
        
        margin: 10px;
        margin-top: 30px;

        padding: 10px;

        font-size: 16px;

        color:white;
    }

    .yes{
        background-color: unset;
        border-color: green;
        border-style: solid;
        border-radius: 10px;
        border-width: 2px;
    }

    .yes:hover{
        background-color: green;
        border-color: green;
        border-style: solid;
        border-radius: 10px;
        border-width: 2px;

        color: white;
        cursor: pointer;

    }

    .no{
        background-color: unset;
        border-color: red;
        border-style: solid;
        border-radius: 10px;
        border-width: 2px;
    }

    .no:hover{
        background-color: red;
        border-color: red;
        border-style: solid;
        border-radius: 10px;
        border-width: 2px;

        color: white;
        cursor: pointer;

    }

</style>