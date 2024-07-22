import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All Books are here</h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book) => (
          <Card
            key={book._id}
          >
            <img src={book.imageURL} alt="" className="h-96" />
            <p>{book.bookTitle}</p>
            <p>{book.bookDescription}</p>

            <button className="bg-blue-700 font-semibold text-white py-2 rounded">Buy Now</button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
