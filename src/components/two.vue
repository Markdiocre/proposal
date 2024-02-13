<template>
    <div class="container">
        <div class="message">
            <h1>You're the semicolon in my program. <br>It will be an error kapag wala ka</h1>
            <div class="image"></div>
            <button class="next" @click="proceed">Corny mo tanga</button>
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
        text-align: center;
    }

    .message{
        animation-name: ease;
        animation-duration: 2s;
    }

    .image{
        height: 400px;
        width: 100%;

        background-image: url("../assets/shrek.jpeg");
        background-size: cover;
        background-position-y: center;
        background-repeat: no-repeat;
        margin-top: 30px;

        align-self: center;

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