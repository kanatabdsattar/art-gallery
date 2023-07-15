<script setup lang="ts">
    import NavBar from "./NavBar.vue";
    import Search from "./icon/Search.vue";
</script>
<template>
    <header>
        <NavBar/>
        <img src="../icons/background.png" alt="background" class="background">
        <div class="loop">
            <input type="text" placeholder="Поиск">
            <Search class="icon"/>
        </div>
    </header>   
</template>
<style scoped>
header{
    overflow: hidden;
    justify-content: center;
}
.background{
    position: relative;
}
.loop{
    position: absolute;
    align-items: center;
    bottom: 60%;
    left: 30%;
    display: flex;
    width: 500px;
    height: 50px;
    background-color: white;
}
.loop>input{
    padding-left: 10px;
    flex: 1;
    height: 40px;
    border: none;
    outline: none;
}
.icon{
    padding-right:10px ;
}
</style>