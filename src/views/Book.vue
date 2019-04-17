<template>
    <div>
        <v-container>
            <Header />
        </v-container>
        <v-container grid-list-md v-if="book">
            <v-layout row wrap>
                <v-flex xs12 xs10 offset-sm1>
                    <BookDetails :book="book"></BookDetails>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>

import BookDetails from '@/components/BookDetails.vue'
import Header from '@/components/AppHeader.vue'

export default {
    components: {
        BookDetails,
        Header
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    computed: {
        book() {
            return this.$store.getters.GET_BOOKS.find(book => book.id === this.id)
        }
    }
}
</script>

<style scoped>

</style>