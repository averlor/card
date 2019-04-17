<template>
    <v-card color="grey" class="white--text">
        <v-container fluid>
            <!-- Content for big screen start-->
            <v-layout row class="hidden-sm-and-down">
                <v-flex md4>
                    <v-img :src= 'book.imageUrl' class="book__image" mt-2>
                    </v-img>
                </v-flex>
                <v-flex md8>
                    <v-card-title>
                        <div>
                            <div class="headline">
                                {{ book.title }}
                            </div>
                            <div>{{ book.description }}</div>
                            <v-divider class="white" pt-2></v-divider>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-rating v-model="book.rating" color="yellow" readonly dense half-increments></v-rating>
                        <div class="ml-1">
                            <span>{{ book.rating }}</span>
                        </div>
                        <v-spacer></v-spacer>
                        <v-btn flat class="book__color_btn_buy" dark>BUY</v-btn>  
                    </v-card-actions>
                </v-flex>
            </v-layout>
            <!-- Content for big screen end -->

            <!-- Content for small screen start -->
            <div class="hidden-md-and-up">
                <v-layout row>
                    <v-flex xs4 md3>
                        <v-img :src= 'book.imageUrl'>
                        </v-img>
                    </v-flex>
                    <v-flex xs8 md9>
                        <v-card-title>
                                <h4>
                                    {{ book.title }}
                                </h4>
                                <v-btn flat class="book__color_btn_buy white--text">BUY</v-btn>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-title>
                            <div>{{ book.description }}</div>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs10 offset-xs1>
                        <v-card-actions>
                            <v-rating v-model="book.rating" color="yellow" readonly dense half-increments></v-rating>
                            <div class="ml-1">
                                <span>{{ book.rating }}</span>
                            </div>
                    </v-card-actions>
                    </v-flex>
                </v-layout>
            </div>
            <!--Content for small screen end  -->
        </v-container>
    </v-card>
</template>

<script>

export default {
    props: {
        book: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.book__image{
    width: 80%;    
}
.book__color_btn_buy{
    background-color: #000;
    font-weight: bold;
}
.book__color_btn_buy:hover{
    background-color: yellow;
    color: black;
}
</style>