<script setup>
import { useRouter } from 'vue-router';


const router = useRouter()

function proceed(){
    router.push("/us")
}

</script>

<template>
    <div class="container">
        <div class="message">
            <h1>NIAH BAHO HAHAHAHAHAAHHAHAHA</h1>
            <p>Sabi niya sa akin na isama daw siya dito.<br> Sinama ko na or baka ngatngatin niya raw <br>yung tsinelas ko kapag nagkita kami</p>
            <div class="image"></div>
            <button class="next" @click="proceed">Bully ka talaga sa anak mo</button>
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