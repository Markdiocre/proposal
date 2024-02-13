<script setup>
import { useRouter } from 'vue-router';


const router = useRouter()

function proceed(){
    router.push("/2")
}

</script>

<template>
    <div class="container">
        <div class="message">
            <h1>Hiiii Tangiii</h1>
            <p>There's a lot of thing that I want to say to you. 
                Sabi nga nila, words cant explain how much<br> 
                i love you... You have the full package na eh kaya maswerte me sayo ng sobra
            </p>
            <div class="image"></div>
            <button class="next" @click="proceed">Okkiee</button>
        </div>
    </div>
</template>

<style scoped>

    

    .container {
        height: 100vh;
        background-color: white;

        display: flex;
        justify-content: center;
        align-items: center;

        color: var(--violet-color);
        text-align: start;
    }

    .message{
        animation-name: ease;
        animation-duration: 2s;
    }

    p{
        font-size: 16px;
    }

    h1{
        font-size: 32px;
    }

    .image{
        height: 400px;
        width: 600px;

        background-image: url("../assets/p1.jpg");
        background-size: cover;
        background-position-y: center;
        background-repeat: no-repeat;
        margin-top: 30px;
    }

    .next{
        background-color: var(--violet-color);
        border-color: var(--violet-color);
        border-style: solid;
        border-radius: 10px;
        border-width: 2px;
        width: 100%;

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