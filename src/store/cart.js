import Vue from 'vue'

export default {
    state: {
        cart: []
    },
    getters: {
        GET_BOOKS_IN_CART: state => state.cart
    },
    mutations: {
        SET_BOOKS(state, payload) {
            state.cart = payload
        },
        CLEAR_BOOKS(state) {
            state.cart = []
        }
    },
    actions: {
           LOAD_CART({commit}) {
            Vue.$db.collection('books')
            .get()
            .then(querySnapshot => {
                let books = []
                querySnapshot.forEach(element => {
                    const data = element.data()
                    let book = {
                        id: element.id,
                        author: data.author,
                        cost: data.cost,
                        description: data.description,
                        genre: data.genre,
                        imageUrl: data.imageUrl,
                        rating: data.rating,
                        title: data.title
                    }
                    books.push(book)
                });
                commit('SET_BOOKS', books)
            })
            .catch(error => console.log(error))
           }                                                 
    },
}