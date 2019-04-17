<template>
    <v-container grid-list-xl>
        <v-layout row wrap>
            <!-- Search start -->
            <v-flex  xs12 sm10 md8 offset-sm1 offset-md2>
                <v-container fluid>
                    <v-layout row>
                        <v-flex xs12 md3>
                            <v-select
                            class="book__genre" 
                            label="genre" 
                            v-model="genre" 
                            multiple 
                            item-text="name" 
                            item-value="value" 
                            :items="genres">
                            </v-select>
                        </v-flex>
                        <v-flex xs12 md3>
                            <v-select label="Order by"
                            v-model="order"
                            :items="orderBy"
                            @input="sortCost($event)"></v-select>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-text-field label="Search" v-model="searchTerm"></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <!-- Search end -->

            <!-- content start -->
            <v-flex v-for="book in filrteredBooks" :key="book.id" xs12 sm10 md3 offset-sm1 offset-md1>
                <Book :book="book"/>
            </v-flex>
            <!-- content end -->
        </v-layout>
    </v-container>
</template>

<script>

import Book from './BooksListItem'
// import Search from './BookSearch.vue'

export default {
    components:{
        Book
    },
    data() {
        return {
            searchTerm: null,
            genre: [],
            genres: [
                {name: 'Фантастика', value: 'Фантастика'},
                {name: 'Роман', value: 'Роман'},
                {name: 'Детектив', value: 'Детектив'},
                {name: 'Ужасы', value: 'Ужасы'},
                {name:'Приключения', value: 'Приключения'}
                ],
            order: null,
            orderBy: ['Lowest', 'Highest']                
        }
    },
    computed: {
        books() {
            return this.$store.getters.GET_BOOKS
        },
        filrteredBooks() {
            let books = this.books
            if (this.searchTerm) {
                books = books.filter(book => book.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0) 
            }

            if(this.genre.length){
                books = books.filter(book => this.genre.filter(val => book.genre.indexOf(val) !== -1).length > 0)
            } 

            return books;
        }
    },
    methods: {
        sortCost(event) {
            this.order = event
            if (this.order === 'Lowest') {
                this.books.sort(function(a,b) {
                    return a.cost-b.cost
                })
            }
            else {
                this.books.sort(function(a,b) {
                    return b.cost-a.cost
                })
            }
        }
    }
}
</script>

<style scoped>

</style>