<template>
    <Sidebar />
    <div class="w-full">
        <Header />
        <main class="py-5 px-7">Main content</main>
    </div>
</template>

<script>
import Sidebar from "./components/layout/Sidebar.vue";
import Header from "./components/layout/Header.vue";

export default {
    name: "App",
    components: {
        Sidebar,
        Header,
    },
};
</script>
