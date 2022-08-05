<template>
 <div>
  <div id="header" class="relative bg-left bg-[url('/menu-light.png')] dark:bg-[url('/menu-page.jpg')]">
    <BurgerNavBar />
    <div>
      <h1 class="font-oswald uppercase text-6xl text-center pt-24 pb-28 z-20 text-black dark:text-white">
        Our Menu
      </h1>
      <!--
      <div class="z-10 absolute -bottom-48 -right-48">
      <img src="garlic_round.png" class="w-4xl" alt="" />
      </div>
      <div class="relative items-center justify-center h-screen">
      <video autoplay loop class="absolute flex min-w-screen min-h-screen z-0"><source src="menucutlerydarkbg.mp4" type="video/mp4"></video>
      </video>
      -->
    </div>
  </div>
  <div id="items" class="grid grid-cols-3 pt-10 px-20 pb-24 gap-5 bg-gray-100 dark:bg-black">
   <MenuItem
   v-for="b in items"
   :key="b.name"
   :item="b" />
  </div>
  <BurgerBottom />
 </div>
</template>

<script>
/*
export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.$axios.get('items.json').then(
      (response) => {
        this.items = response.data.burgers;
      });
  },
};
*/
</script>
