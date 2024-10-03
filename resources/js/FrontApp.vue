<template>
    <div class="w-full">
        <Header />
        <main class="py-5 px-7">
            <router-view/>
        </main>
    </div>
</template>

<script>
import Header from "./components/Front/Layouts/Header.vue";

export default {
    name: "App",
    components: {
        Header,
    },
};
</script>
