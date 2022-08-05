<template>
    <div>
        <div id="header" class="relative bg-left bg-[url('/menu-light.png')]">
            <Header />
            <h1 class="font-oswald uppercase text-6xl text-center pt-24 pb-28 z-20 text-black dark:text-white">
                Our Menu
            </h1>
        </div>
        <div>
           <table class="table-auto w-2/3 mt-20 mx-auto mb-24">
                <thead class="text-3xl font-oswald text-black uppercase">
                    <tr>
                        <th class="text-left">Name</th>
                        <th class="text-center">Price</th>
                        <th class="text-center">Quantity</th>
                        <th class="text-center">Total</th>
                        <th class="text-center">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="order in $store.state.orders"
                        :key="order.name"
                        class="font-oswald uppercase text-2xl border-b"
                    >
                            <td class="py-10">{{ order.name }}</td>
                            <td class="text-right">RM {{ order.price.toFixed(2) }}</td>
                            <td class="text-center">{{ order.quantity }}</td>
                            <td class="text-right">RM {{ (order.price*order.quantity).toFixed(2) }}</td>
                            <td class="text-center"><button @click="removeItem">✖️</button></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr class="font-oswald font-bold text-2xl bg-gray-100 border-t border-b uppercase">
                        <td class="py-10" colspan="3">Total</td>
                        <td class="text-right">RM {{ total.toFixed(2) }}</td>
                        <td class="text-transparent">text</td>
                    </tr>
                    <tr>
                      <td colspan="3">
                        <input
                          id="email"
                          type="email"
                          placeholder="Please enter your email"
                          class="w-full border border-gray-300 text-xl mt-5 py-3 px-2"
                        />
                      </td>
                      <td colspan="2" class="text-right">
                        <button
                          class="font-oswald uppercase bg-red-500 text-white text-xl py-3 px-2 ml-5 mt-5"
                          @click="submitOrder"
                        >
                          Confirm My Order
                        </button>
                      </td>
                    </tr>
                </tfoot>
            </table>
        </div>
        <Footer />
    </div>
</template>

<script>
/*
export default {
  computed: {
    total() {
      let total = 0;
      this.$store.state.orders.forEach((order) => {
        total = total + order.price * order.quantity;
      });
      return total;
    },
  },
  methods: {
    removeItem(name) {
      this.$store.commit('removeItem', name);
    },
    submitOrder() {
      this.$axios.post('/netlify/functions/email', {
        email: document.getElementById('email').value,
        orders: this.$store.state.orders,
      });
      this.$axios.post('/netlify/functions/db', {
        email: document.getElementById('email').value,
        orders: this.$store.state.orders,
      });
    }
  },
};
*/
</script>
