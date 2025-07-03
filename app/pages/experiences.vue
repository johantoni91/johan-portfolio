<template>
  <!-- component -->
  <section>
    <audio ref="audio" src="/assets/tech.mp3" controls class="hidden" />
    <div class="container mx-auto flex flex-col items-start md:flex-row">
      <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
        <p class="ml-2 text-yellow-300 uppercase tracking-loose">Experiences</p>
        <p class="text-3xl md:text-4xl leading-normal md:leading-relaxed">
          My experience in
          <UButton variant="ghost" color="warning" @click="playSong"
            class="text-3xl md:text-4xl leading-normal md:leading-relaxed hover:cursor-pointer">
            Technologia
            <Icon name="ic:round-music-note" class="w-5 h-5 bg-yellow-300" />
          </UButton>
        </p>
        <p class="text-sm md:text-base mb-4">
          Let's take a look at my experience in the field of technology. I have
          been working in this field for a long time and have gained a lot of
          experience.
        </p>
        <NuxtLink to="/"
          class="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
          Base knowledge</NuxtLink>
      </div>
      <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div class="container mx-auto w-full h-full">
          <div class="relative wrap overflow-hidden p-10 h-full">
            <div class="border-2-2 border-yellow-555 absolute h-full border" style="
                right: 50%;
                border: 2px solid #ffc100;
                border-radius: 1%;
              "></div>
            <div class="border-2-2 border-yellow-555 absolute h-full border" style="
                left: 50%;
                border: 2px solid #ffc100;
                border-radius: 1%;
              "></div>
            <div v-for="(exp, i) in Experiences()" :key="i" class="mb-40 flex justify-between items-center w-full"
              :class="i % 2 === 0 ? '' : 'flex-row-reverse'" :data-aos="i % 2 === 0 ? 'fade-left' : 'fade-right'">
              <div class="order-1 w-5/12"></div>
              <div class="order-1 w-5/12 px-1 py-4" :class="i % 2 === 0 ? 'text-left' : 'text-right'">
                <p class="mb-3 text-base text-yellow-300">{{ exp.date }}</p>
                <h4 class="mb-3 font-bold text-lg lg:text-2xl">
                  {{ exp.title }}
                </h4>
                <p class="text-sm md:text-base leading-snug text-opacity-100">
                  {{ exp.desc }}
                </p>
                <div class="flex justify-center items-center mt-5 px-1">
                  <UModal v-model="isModalOpen" :close-on-click-outside="true">
                    <UCarousel v-slot="item" loop :autoplay="{ delay: 1500 }" :items="exp.img"
                      :ui="{ item: 'basis-1/3' }">
                      <img :src="item.item.src" width="234" height="234"
                        class="rounded-lg hover:cursor-pointer hover:shadow hover:shadow-yellow-300 m-2"
                        @click="openModal(item.item)" />
                    </UCarousel>
                    <template #content>
                      <img :src="selectedImage?.src" alt="" class="rounded-lg w-full" />
                    </template>
                  </UModal>
                </div>
              </div>
            </div>
          </div>
          <img class="mx-auto"
            src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Experiences } from "@/composables/DataAbout";

const audio = ref<HTMLAudioElement | null>(null);

const playSong = () => {
  audio.value?.play();
};

type Gambar = {
  src: string;
};

const selectedImage = ref<Gambar | null>(null);
const isModalOpen = ref(false);

function openModal(item: Gambar) {
  selectedImage.value = item;
  isModalOpen.value = true;
}
</script>
