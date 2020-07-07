const initialState = []
export const bookReducer = (state = initialState, action) => {
    
    switch(action.type){
        case "ADD_BOOK":
            const id = Math.floor(Math.random()*1000)
            return [...state, {
                title: action.book.Title,
                author: action.book.Author,
                id: id
            }] 
        case "DELETE_BOOK" : 
        return state.filter(book => {
          return book.id !== action.id
        }) 
        default: 
        return state    
    }
}
