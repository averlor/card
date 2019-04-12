import Vue from 'vue'

export default {
    state: {
        books: []
    },
    getters: {
        GET_BOOKS: state => state.books
    },
    mutations: {
        SET_BOOKS(state, payload) {
            state.books = payload
        }
    },
    actions: {
        LOAD_BOOK({commit}) {
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
                commit('SET_BOOKS')
            })
            .catch(error => console.log(error))
        }
    }
}