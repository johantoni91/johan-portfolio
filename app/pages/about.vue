<template>
    <div>
        <div>
            <UBreadcrumb separator-icon="i-lucide-arrow-right" :items="items" />
        </div>
        <div class="p-3 mt-5">
            <div class="flex flex-col justify-center items-center h-screen transition-opacity duration-700 p-5">
                <VueWriter :array="['Expert Web Development Services For Your Business']" :typeSpeed="100"
                    :eraseSpeed="200" class="md:text-9xl text-6xl text-center font-extrabold" />
                <small class="text-center text-gray-400 mt-2">Partner with me to build unique, advanced, ergonomic, or
                    custom
                    applications as request. Web application</small>
                <UButton to="#main" variant="ghost" size="sm" class="hover:bg-transparent">
                    <Icon name="lucide:arrow-big-down-dash" class="animate-bounce w-8 h-8 bg-green-500 mt-16" />
                </UButton>
            </div>
        </div>
        <div id="main" data-aos="fade-down"
            class="h-screen flex flex-col justify-center items-center gap-5 transition-opacity duration-700 p-5">
            <h1 class="font-extrabold md:text-9xl text-6xl">About Me</h1>
            <small class="text-center text-gray-400">As a fullstack engineer i committed to building custom web
                solutions
                that drive bussiness to success.</small>
            <div class="flex flex-wrap md:flex-nowrap gap-3 justify-between md:w-[80vw] w-full md:px-3 px-0">
                <img src="/assets/about.jpg" width="300" height="300" class="rounded-lg shadow-md mx-auto"
                    alt="aboutme" />
                <div class="text-justify flex flex-col gap-3 lg:w-1/2 w-full">
                    <p>Resourceful and detail-oriented Full-Stack Developer with 2 years of experience in developing
                        robust and scalable web
                        applications. Proficient in both front-end and back-end technologies, including JavaScript,
                        Laravel, React, Vue, Next.js,
                        Nuxt, Python, and SQL. Adept at designing intuitive user interfaces and building efficient APIs,
                        with a strong foundation in
                        modern software development practices. Passionate about
                        continuous learning and consistently stay updated with the latest technologies to deliver
                        high-quality digital solutions.</p>
                </div>
            </div>
        </div>

        <div id="whyme" data-aos="fade-down"
            class="h-screen flex flex-col justify-center items-center gap-5 transition-opacity duration-700 p-5 mb-5">
            <h1 class="font-extrabold md:text-9xl text-6xl text-center">Why Me</h1>
            <small>Thank you for considering me as web developer. </small>
            <div class="flex flex-wrap justify-center items-center gap-10 mt-3">
                <div class="w-96" v-for="(provide, index) in Provides()" :key="index">
                    <UCard class="relative w-full shadow-lg shadow-slate-300 dark:shadow-slate-500">
                        <div class="flex flex-col gap-3">
                            <div
                                class="px-2 pt-1 w-12 absolute -top-5 rounded-lg bg-white dark:bg-slate-800 shadow dark:shadow-slate-500 shadow-slate-300">
                                <Icon :name="provide.icon" class="w-8 h-8 left-0" />
                            </div>
                            <h1 class="mt-3 font-extrabold text-2xl">{{ provide.label }}</h1>
                            <small>{{ provide.desc }}</small>
                        </div>
                    </UCard>
                </div>
            </div>
        </div>

        <div id="skills" data-aos="fade-down"
            class="h-[60dvh] flex flex-col justify-center items-center gap-5 transition-opacity duration-700 p-5 mb-5">
            <h1 class="font-extrabold md:text-9xl text-6xl text-center">Skills</h1>
            <small>Provide every skills for finishing your web solutions.</small>
            <div class="w-full lg:w-1/2">
                <NuxtMarquee>
                    <div class="flex flex-wrap justify-center gap-3 mt-3 p-3 rounded-lg">
                        <Icon name="devicon:php" class="w-10 h-10" />
                        <Icon name="devicon:cplusplus" class="w-10 h-10" />
                        <Icon name="devicon:mysql-wordmark" class="w-10 h-10" />
                        <Icon name="devicon:postgresql" class="w-10 h-10" />
                        <Icon name="devicon:javascript" class="w-10 h-10" />
                        <Icon name="devicon:python" class="w-10 h-10" />
                        <Icon name="devicon:laravel" class="w-10 h-10" />
                        <Icon name="devicon:react" class="w-10 h-10" />
                        <Icon name="devicon:nextjs" class="w-10 h-10" />
                        <Icon name="devicon:vuejs" class="w-10 h-10" />
                        <Icon name="devicon:express-wordmark" class="w-10 h-10 dark:invert" />
                        <Icon name="devicon:fastapi" class="w-10 h-10" />
                        <Icon name="devicon:nodejs-wordmark" class="w-10 h-10" />
                        <Icon name="devicon:npm" class="w-10 h-10" />
                        <Icon name="devicon:arduino" class="w-10 h-10" />
                        <Icon name="devicon:github" class="w-10 h-10 dark:invert" />
                        <Icon name="devicon:gitlab" class="w-10 h-10" />
                    </div>
                </NuxtMarquee>
            </div>
        </div>

        <div class="flex justify-center items-center transition-opacity duration-700 p-5 mb-5">
            <UButton to="/experiences" variant="subtle" size="sm" class="">
                <p>Check My Experiences</p>
            </UButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from "@nuxt/ui";
import { VueWriter } from "vue-writer";
import { useElementVisibility } from "@vueuse/core";
import { Provides } from "@/composables/DataAbout";

const sectionRef = ref(null);
const isVisible = useElementVisibility(sectionRef);

const items = ref<BreadcrumbItem[]>([
    {
        label: "About",
        icon: "hugeicons:user-account",
        to: "/about",
    },
]);
</script>
