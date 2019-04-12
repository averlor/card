<template>
    <v-container fluid>
        <!-- Content for big screen -->
       <v-layout row class="hidden-sm-and-down">
              <v-container fluid>
                   <v-flex md12>
                       <v-text-field label="Search" v-model="searchTerm"></v-text-field>
                   </v-flex>
              </v-container>

                <v-container fluid>
                    <v-flex md4>
                        <div class="sort">
                            Order by
                            <select name="" id="">
                                <option value="">Select</option>
                                <option value="lowestprice">Lowest to highest</option>
                                <option value="highestprice">Highest to lowest</option>
                            </select>
                        </div>
                    </v-flex>
                </v-container>

            <v-container fluid>
                <v-flex md5>
                    <label>
                        <input type="checkbox" name="" id="">
                        <span>Роман</span>
                    </label>
                </v-flex>
            </v-container>            
        </v-layout>
        <!-- Content for small screen -->
        <div class="hidden-md-and-up">

        </div>
    </v-container>
</template>

<script>

export default {
    data: () => ({
        searchTerm: null
    })
}
</script>

<style scoped>

</style>