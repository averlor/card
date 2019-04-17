<template>
    <div>
        <v-navigation-drawer dark value=0.4 fixed right v-model="drawer" width="500">
            <!-- shopping list -->
                <v-layout row wrap>
                    <div class="cart__shopping_list">
                        <v-container>
                            <v-btn left flat @click.prevent="drawer = !drawer">
                                <v-icon left>close</v-icon>
                                    back to shopping
                            </v-btn>
                            <v-divider></v-divider>
                            
                            <v-flex xs12 sm10 md3 offset-sm1 offset-md1 v-for="book in cartBooks" :key="book.id">
                                <BookCart :book="book"/>
                            </v-flex>
                        </v-container>
                    </div>
                    <!-- subtotal -->
                    <div class="cart__subtotal">
                        <v-container>
                            <v-card elevation=0>
                                <v-card-title>
                                    <div>
                                        <span class="cart__total_text">SUBTOTAL</span>
                                        <span class="cart__total_cost">&#8381; {{ 0.00 }}</span>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat class="cart__checkout">CHECKOUT</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-container>
                    </div>
                </v-layout>
        </v-navigation-drawer>
        <v-toolbar flat app fixed color="white">
            <div class="cart">
                <v-badge bottom left color="blue">
                    <template v-slot:badge>
                        <span>{{cartBooks.length}}</span>
                    </template>
                    <v-icon class="cart__icon" x-large color="white" @click.stop='drawer = !drawer'>shopping_cart</v-icon>
                </v-badge>
            </div>
        </v-toolbar>
    </div>
</template>

<script>

import BookCart from './BookCart.vue'

export default {
    name: 'app-header',
    components: {
        BookCart
    },
    data() {
        return {
            drawer: false,
            menuItems: [
                {
                    id: 1,
                    icon: 'visibility',
                    title: 'READ'
                },
                {
                    id: 2,
                    icon: 'extension',
                    title: 'LEARN WORD'
                },
                {
                    id: 3,
                    icon: 'account_circle',
                    title: 'My profile'
                }
            ]
        }
    },
    computed: {
        cartBooks() {
            console.log(this.$store.getters.GET_BOOKS_IN_CART)
            return this.$store.getters.GET_BOOKS_IN_CART
        }
    }
}
</script>

<style scoped>
.cart{
    background-color: black;
    width: 60px;
    height: 60px;
    position: absolute;
    top: 0;
    right: 0;
}
.cart__icon{
    margin: 10px auto;
}
.cart__shopping_list{
    position: absolute;
    top: 0;
    overflow: auto;
}
.cart__subtotal{
    width: 100%;
    /* position: absolute;
    bottom: 0; */
}
.cart__total_text{
    font-size: 1.25em;
    color: grey;
    position:absolute;
    left: 0;
}
.cart__total_cost{
    font-size: 1.25em;
    color: yellow;
    position: absolute;
    right: 0;
}
.cart__checkout{
    background-color: rgba(0,0,0,.7);
    color: white;
    font: bold 1.25em Arial;
    width: 100%;
}
.cart__checkout:hover{
    background-color: yellow;
    color: black;
}
</style>