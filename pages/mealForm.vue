<template>
    <div>
        <div id="modal head">
        <img src="" alt="" />
        <button @click="modalOff"> x </button>
        <div class="flex flex-row">
            <h3 class="text-3xl text-left">Burger with 2 Sides + Drink</h3>
            <p>RM {{ price }}</p>
        </div>
        <p class="text-lg text-left"> Combo comes with a selection of your favourite drink</p>
        </div>
        <div id="select item">
            <h5> Select Item</h5>
            <v-radio>
                {{ item }}
            </v-radio>
            <div>
                <h5> Select Size</h5>
                    <v-radio>XL</v-radio>
                    <p>RM {{ price }}</p>
                    <v-radio>L</v-radio>
                    <p>RM {{ price }}</p>
                    <v-radio>regular</v-radio>
                    <p>RM {{ price }}</p>
                    <v-radio>small</v-radio>
                    <p>RM {{ price }}</p>
            </div>
        </div>
        <div id="select side 1">
            <h5> Select Side 1 </h5>
            <p>Select 1</p>
            <v-radio>Sweet potato chips</v-radio>
            <v-radio>Potato wedges</v-radio>
            <v-radio>Chargrilled vegetables</v-radio>
            <v-radio>Fried rice</v-radio>
            <v-radio>Fresh fruit salad</v-radio>
            <v-radio>Garden salad</v-radio>
            <v-radio>Mushroom soup</v-radio>
            <v-radio>Chicken wings</v-radio>
        </div>
        <div id="select side 2">
            <h5> Select Side 2 </h5>
            <p>Select 1</p>
            <v-radio>Sweet potato chips</v-radio>
            <v-radio>Potato wedges</v-radio>
            <v-radio>Chargrilled vegetables</v-radio>
            <v-radio>Fried rice</v-radio>
            <v-radio>Fresh fruit salad</v-radio>
            <v-radio>Garden salad</v-radio>
            <v-radio>Mushroom soup</v-radio>
            <v-radio>Chicken wings</v-radio>
        </div>
        <div id="drinks">
            <h5> Select Drink </h5>
            <p>Select 1</p>
            <v-radio>Orange Juice</v-radio>
            <v-radio>Iced Lemon Tea</v-radio>
            <v-radio>Jasmine Green Tea</v-radio>
            <v-radio>Coke</v-radio>
            <v-radio>Sprite</v-radio>
            <v-radio>Iced latte</v-radio>
            <v-radio>Mineral water</v-radio>
        </div>
        <div id="extras">
            <h5>Extra Testo's Signature Sauce in Tubs</h5>
            <p>Optional</p>
            <p>Select up to 2 (optional)</p>
            <v-checkbox>
                Garlic
            </v-checkbox>
            <p>+RM{{ price }}</p>
            <v-checkbox>
                Mild
            </v-checkbox>
            <p>+RM{{ price }}</p>
            <v-checkbox>
                Hot
            </v-checkbox>
            <p>+RM{{ price }}</p>
        </div>
        <div id="desserts">
            <h5>Desserts</h5>
            <p>Optional</p>
            <v-checkbox>
                chocolate cake slice
            </v-checkbox>
            <p>+RM{{ price }}</p>
            <v-checkbox>
                caramel cheesecake slice
            </v-checkbox>
            <p>+RM{{ price }}</p>
            <v-checkbox>
                red velvet cake slice
            </v-checkbox>
            <p>+RM{{ price }}</p>
            <v-checkbox>
                portuguese cheese tart
            </v-checkbox>
            <p>+RM{{ price }}</p>
            <v-checkbox>
                ice cream with jelly
            </v-checkbox>
            <p>+RM{{ price }}</p>
        </div>
        <div id="special instructions">
            <p>Any specific preferences? Let the restaurant know. </p>
            <input
                id="special instructions"
                type="text"
                placeholder="e.g. No mayo"
                class="h-[50px] w-full border-gray-500 active:border-blue-500"
            />
        </div>
        <div id="item not available">
            <h5>If this product is not available</h5>
            <p> dropdown selection </p>
        </div>
        <div id="buttons" class="flex flex-row">
            <button class="w-8 h-8 p-5"> - </button>
            <span id="counter" class="w-8 h-8 p-5">counter</span>
            <button class="w-8 h-8 p-5"> + </button>
            <button class="p-5 w-full "> Add to Cart </button>
        </div>
    </div>
</template>
