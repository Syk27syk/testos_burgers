<template>
    <div class="text-left border-2 border-opacity-20 border-gray-300 rounded-sm relative hover:border-8 hover:border-gray-200 hover:border-opacity-20">
        <img :src="image" alt="">
        <h4 class="text-lg px-2 pt-2 uppercase text-gray-500">
           <a href=""><strong>{{ title }}</strong></a>
        </h4>
        <p class="text-gray-800 text-opacity-80 font-light text-sm p-2 pb-20">
            {{ description }}
        </p>
        <button class="bg-red-900 text-yellow-500 font-semibold px-3 py-2 rounded-md m-3 absolute bottom-0 left-0">
            RM {{ price }}
        </button>
    </div>
</template>

<script>
export default {
  props: ['image', 'title', 'description', 'price'],
};
</script>
