<template>
  <v-hover>
        <v-card 
        slot-scope="{ hover }"
        elevation=2 class="book">
            <v-container>
                <!-- Content for big screen start-->
                <v-layout column class="hidden-sm-and-down">
                    <v-flex xs4 md7 offset-md1>
                        <v-img :src= 'book.imageUrl' class="book__image">
                        </v-img>   
                    </v-flex>
                    <v-flex xs4 md7>
                        <v-card-title>
                            <div>
                                <div class="headline">
                                    <p class="text-md-center">{{ book.title }}</p>
                                </div>
                                
                                <v-divider class="orange"></v-divider>
    
                                 <div class="headline" mt-3>
                                    Цена: {{book.cost}} руб.
                                </div>
                                <div>
                                    <v-rating v-model="book.rating" color="yellow" readonly dense half-increments></v-rating>
                                    <div class="ml-1">
                                        <span>{{ book.rating }}</span>
                                    </div>
                                </div>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat class="book__color-btn-more" dark :to="{name: 'book', params:{id: book.id}}">MORE</v-btn>
    
                             <v-spacer></v-spacer>
    
                             <v-btn flat class="book__color-btn-buy" dark>BUY</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
                <!-- Content for big screen end -->
    
                <!-- Content for small screen start -->
                <div class="hidden-md-and-up">
                    <v-layout column>
                        <v-flex xs4 md7 offset-md1>
                            <v-img :src= 'book.imageUrl' class="book__image">
                            </v-img>   
                        </v-flex>
                        <v-flex xs4 md7 offset-md1>
                            <v-card-title>
                                <div>
                                    <div class="headline">
                                        <p class="text-md-center">{{ book.title }}</p>
                                    </div>
                                    
                                    <v-divider class="black"></v-divider>
    
                                        <div class="headline" mt-3>
                                        Цена: {{book.cost}} руб.
                                    </div>
                                    <div>
                                        <v-rating v-model="book.rating" color="yellow" readonly dense half-increments></v-rating>
                                        <div class="ml-1">
                                            <span>{{ book.rating }}</span>
                                        </div>
                                    </div>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn flat class="purple" dark :to="{name: 'book', params:{id: book.id}}">MORE</v-btn>
    
                                    <v-spacer></v-spacer>
    
                                    <v-btn flat class="yellow">BUY</v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </div>
                <!--Content for small screen end  -->
            </v-container>
        </v-card>
  </v-hover>
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
    width: 90%;    
}
.book__color-btn-more{
    background-color: #000;
}
.book__color-btn-buy{
    background-color: #000;
}
.book__color-btn-more:hover{
    background-color: purple;
}
.book__color-btn-buy:hover{
    background-color: yellow;
    color: black;
}
</style>