let books=[{title:"Siddharta",authorName:"Hermann Hesse",releaseYear:1922},{
  title:"La Peste",authorName:"Albert Camus",releaseYear:1947},
  {
    title:"Infinite Jest",
    authorName:"David Foster Wallace",
    releaseYear:1996
  }
];

function sortByYear(book1,book2)
{
  return book1.releaseYear<book2.releaseYear?-1:(book1.releaseYear>book2.releaseYear?1:0);
 }

 let filteredBooks=books.filter((book)=>book.authorName=="Albert Camus");
 let filteredBooksSorted=filteredBooks.sort(sortByYear);
