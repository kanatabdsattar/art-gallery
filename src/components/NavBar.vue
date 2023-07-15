<script setup lang="ts">
import Chosen from "./icon/Chosen.vue";
</script>
<template>
    <header>
        <nav>
            <img src="../icons/OBJECTS.png" alt="logo" class="logo">
            <button>
                <Chosen/>
                <p>Избранный</p>
            </button>
        </nav>
    </header>
</template>

<style>
header{
    background-color: black;
}
nav{
    display: flex;
    justify-content: space-between;
    margin-left: 50px;
    margin-right: 50px;
}
button{
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    color: white;
    gap: 10px;
}
.logo{
    padding: 20px;
    height: 50px;
}
.icon{

}
</style>