<template>
    <aside class="bg-white border-r border-[#E4E7EC] w-[300px] h-screen p-6">
        <div class="h-full">
            <nav class="h-full">
                <a href="#">
                    <img src="/public/images/logo-main.png" alt="TextCRM" />
                </a>
                <div class="flex flex-col justify-between h-[90%]">
                    <ul class="flex flex-col gap-3 mt-10">
                        <li>
                            <router-link to="/admin/dashboard"
                                class="flex gap-3 items-center font-semibold text-dark"
                            >
                                <img
                                    src="/public/images/icons/dashboard-icon.svg"
                                    alt="Dashboard Icon"
                                />
                                <span>Dashboard</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                to="/admin/zone"
                                class="flex gap-3 items-center font-semibold text-dark"
                            >
                                <img
                                    src="/public/images/icons/manage-icon.svg"
                                    alt=""
                                />
                                <span>Manage Zone</span>
                            </router-link>
                        </li>
                    </ul>
                    <ul class="flex flex-col gap-3">
                        <li>
                            <router-link
                                to="/admin/dashboard"
                                class="flex gap-3 items-center font-semibold text-dark"
                            >
                                <img
                                    src="/public/images/icons/support-icon.svg"
                                    alt=""
                                />
                                <span>Support</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                to="/admin/dashboard"
                                class="flex gap-3 items-center font-semibold text-dark"
                            >
                                <img
                                    src="/public/images/icons/setting-icon.svg"
                                    alt=""
                                />
                                <span>Setting</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </aside>
</template>
