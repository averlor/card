<template>
    <div>
       <v-container>
           <Header />
        </v-container>
        <v-container>
            <BooksList />
        </v-container>
    </div>
</template>

<script>

import BooksList from '@/components/BooksList.vue'
import Header from '@/components/AppHeader.vue'

export default {
    name: 'books',
    components: {
        BooksList,
        Header
    }
}
</script>

