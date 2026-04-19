import React from 'react';
// export const generateStaticParams = async()=>{
//   const res = await fetch('http://localhost:3004/books')
//   const books = await res.json()
//   return books.slice(1, 3).map(book=> ({booksId: book.id}))
// }

const DetailPage = async({params}) => {
  const {booksId} = await params
  const res = await fetch(`http://localhost:3004/books/${booksId}`)
  const received = await res.json()
  return (
    <div>
      <h1>{received.title}</h1>
    </div>
  );
};

export default DetailPage;