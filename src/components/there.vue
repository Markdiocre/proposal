<script setup>
import { useRouter } from 'vue-router';


const router = useRouter()

function proceed(){
    router.push("/valentines")
}

</script>

<template>
    <div class="container">
        <div class="message">
            <h1>I wish we are there with you</h1>
            <p>One big happy family sana. I will be there but it will be later. Si niah, susunod na lang daw siya.</p>

            <p>Actually, i dont need valentine's to show you that i appreciate you so much <br>as my lover and as Niah's mother
            I just hope that i can put my moneyy where my mouth is but since alaws ako <br>kadalasan nun ay pure intentions and efforts na lang which i know you appreciate</p>
            
            <h2>I want to explore more with you. I have big plans</h2>

            <p>So, lets make kapit kapit lang with each other ha?</p>

            <p>I will always try to be the best father para sa family natin. The one that you both deserve</p>
            <button class="next" @click="proceed">Di ko alam magiging reaction mo dito</button>
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
        text-align: start;
    }

    .message{
        animation-name: ease;
        animation-duration: 2s;
    }

    .image{
        height: 400px;
        width: 100%;

        background-image: url("../assets/p3.jpg");
        background-size: cover;
        background-position-y: center;
        background-repeat: no-repeat;
        margin-top: 30px;

        align-self: center;

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