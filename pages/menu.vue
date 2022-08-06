<template>
 <div>
    <div id="header" class="relative bg-left bg-[url('/menu-page.jpg')]">
      <Header />
      <div>
        <h1 class="font-oswald uppercase text-6xl text-center pt-24 pb-28 z-20 text-white">
          Our Menu
        </h1>
      </div>
    </div>
    <div id="items" class="grid md:grid-cols-2 lg:grid-cols-3 pt-10 px-8 lg:px-20 pb-24 gap-5 bg-gray-100">
      <MenuItem
      v-for="b in items"
      :key="b.name"
      :item="b" />
    </div>
    <Information />
    <Footer />
  </div>
</template>

<script>
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
</script>
