

export function selectBook (book){
   //an ActionCreator needs to return an action
   // an object with type property
   return {
       type: 'BOOK_SELECTED',
       payload: book
   };
}