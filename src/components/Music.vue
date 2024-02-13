<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();


function toNextPage(){

    router.push('/1')
}

</script>

<template>

    <div class="container">
        <div class="middle">
            <h1> TO MY TINATANGI</h1>
            <p>Play this on repeat muna 💖</p>
            <div class="qr"></div>

            <button class="next" @click="toNextPage">Done naaa</button>
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
    }

    .middle{
        text-align: center;
    }

    .qr{
        margin-top: 30px;
        height: 300px;
        width: 300px;
        background-image: url("../assets/g1.png");
        background-size: contain;
    }

    .next{
        background-color: unset;
        border-color: white;
        border-style: solid;
        border-radius: 10px;
        border-width: 2px;

        margin-top: 30px;

        padding: 10px;

        font-size: 16px;

        color:white;
    }

    .next:hover{
        color: var(--violet-color);
        background-color: white;
        cursor: pointer;
    }

</style>