<template>
    <Sidebar />
    <div class="w-full">
        <Header />
        <main class="py-5 px-7">
            <router-view/>
        </main>
    </div>
</template>

<script>
import Sidebar from "./components/Admin/Layouts/Sidebar.vue";
import Header from "./components/Admin/Layouts/Header.vue";

export default {
    name: "App",
    components: {
        Sidebar,
        Header,
    },
};
</script>
