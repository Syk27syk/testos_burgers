<template>
    <div>
        <div id="menu" class="grid grid-cols-4 py-5">
          <div id="menu-left">
            <NuxtLink to="/burger/burgerhome"><img src="/logo.png" class="w-[150px]" alt="" /></NuxtLink>
          </div>
          <div id="menu-right" class="col-start-2 col-end-4 justify-end">
            <ul class="flex flex-row flex-wrap space-x-10 text-lg font-oswald text-white uppercase pt-5 flex-auto min-w-lg">
              <NuxtLink
                to="/burger/about"
                class="hover:ring-1 hover:ring-white hover:animate-bounce visited:text-gray-500 py-1 px-3"
              >
                About Us
              </NuxtLink>
              <NuxtLink
                to="/burger/menu"
                class="hover:ring-1 hover:ring-white hover:animate-bounce visited:text-gray-500 py-1 px-3"
              >
                Our Menu
              </NuxtLink>
              <NuxtLink
                to="/burger/locations"
                class="hover:ring-1 hover:ring-white hover:animate-bounce visited:text-gray-500 py-1 px-3"
              >
                Locations
              </NuxtLink>
              <NuxtLink
                to="/burger/contacts"
                class="hover:ring-1 hover:ring-white hover:animate-bounce visited:text-gray-500 py-1 px-3"
              >
                Contacts
              </NuxtLink>
              <NuxtLink
                to="/burger/cart"
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
