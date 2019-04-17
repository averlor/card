<template>
    <v-card elevation=2 class="book">
        <v-container>
            <v-layout row>
                <!-- <v-flex xs4 md8 offset-md2>
                    <v-img :src= 'book.imageUrl' class="book__image">
                    </v-img>   
                </v-flex> -->
                <v-flex xs4 md6>
                    <v-card-title>
                        <div>
                            <div>
                                <v-img :src= 'book.imageUrl' class="book__image">
                                </v-img>
                            </div>
                            <div class="subheading">
                                <p>{{ book.title }}</p>
                            </div>
                            
                            <v-divider class="orange"></v-divider>

                            <div class="subheading" mt-3>
                                Цена: {{book.cost}} руб.
                            </div>
                            
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat class="book__color_btn_buy" dark>
                            <v-icon>closed</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>

export default {
    props: {
        book:{
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>

</style>