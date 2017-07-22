export function getBooks(){
    return {
        type:"GET_BOOKS"
    }
}

export function deleteBooks(id){
    return {
        type: "DELETE_BOOK",
        payload: id
    }
}

export function updateBooks(book){
    return {
        type: "UPDATE_BOOK",
        payload: book
    }
}