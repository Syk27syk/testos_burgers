<template>
    <div class="px-20">
        <div id="menu" class="grid grid-cols-2 py-5">
          <div id="menu-left">
            <NuxtLink to="/index"><img src="/logo.png" class="w-[150px]" alt="" /></NuxtLink>
          </div>
          <div id="menu-right">
            <ul class="flex flex-row gap-x-2 md:gap-x-10 text-lg font-oswald text-white uppercase pt-5 flex-auto min-w-lg pr-5 justify-end">
              <NuxtLink
                to="/about"
                class="hover:ring-1 hover:ring-white hover:animate-bounce active:border-white active:border-4 active:bg-black py-1 px-3"
              >
                <nobr>About Us</nobr>
              </NuxtLink>
              <NuxtLink
                to="/menu"
                class="hover:ring-1 hover:ring-white hover:animate-bounce active:border-white active:border-4 active:bg-black py-1 px-3"
              >
                <nobr>Our Menu</nobr>
              </NuxtLink>
              <NuxtLink
                to="/locations"
                class="hover:ring-1 hover:ring-white hover:animate-bounce active:border-white active:border-4 active:bg-black py-1 px-3"
              >
                Locations
              </NuxtLink>
              <NuxtLink
                to="/contact"
                class="hover:ring-1 hover:ring-white hover:animate-bounce active:border-white active:border-4 active:bg-black py-1 px-3"
              >
                Contacts
              </NuxtLink>
              <NuxtLink
                to="/cart"
                class="hover:ring-1 hover:ring-white hover:animate-bounce visited:text-gray-500 py-1 px-3"
              >
                <!--Cart ({{ $store.getters.totalItems }})-->
              </NuxtLink>
            </ul>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['item'],
};
</script>
