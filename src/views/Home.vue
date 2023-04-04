<template>
    <main>
        <!-- Introduction -->
        <section class="mb-8 py-20 text-white text-center relative">
            <div
                class="absolute inset-0 w-full h-full bg-contain introduction-bg"
                style="background-image: url(assets/images/header.png)"
            ></div>
            <div class="container mx-auto">
                <div class="text-white main-header-content">
                <h1 class="font-bold text-5xl mb-5">
                    Pick up your own project!
                </h1>
                <p class="w-full md:w-8/12 mx-auto px-5 md:px-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phaselluset dolor mollis, congue augue non, venenatis elit. Nunc justo eros, suscipit ac aliquet imperdiet, venenatis et sapien. Duis sed magna pulvinar, fringilla lorem eget, ullamcorper urna.
                </p>
                </div>
            </div>

            <img
                class="relative block mx-auto mt-5 -mb-20 w-auto max-w-full"
                src="/assets/images/introduction-music.png"
            />
        </section>

        <!-- Content -->
        <section>
            <section class="px-10 lg:px-0 grid md:grid-cols-3 grid-cols-1 my-10 lg:mx-40 gap-4">            
                <figure v-for="item in items" :key="item.id" class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                    <a href="#">
                        <img class="rounded-lg" :src="item.url" alt="image description">
                    </a>    
                    <figcaption class="absolute px-4 text-lg text-white bottom-6">
                        <p>{{ item.title }}</p>
                    </figcaption>
                </figure>
            </section>
        </section>
    </main>
</template>

<script setup>
import { itemsService } from "../services/items.service"
import { onMounted, ref} from 'vue'

const items = ref([])

const getItems = async ()=> {
    const { data } = await itemsService.getAllItems()
    items.value = data
}

onMounted(() => {
    getItems()
})
</script>