import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


const Home = () => {
  const [data, setData] = useState([]);
  
   // "https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes"
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
          
//           "https://www.googleapis.com/books/v1/volumes?q=harry+potter"
//         );
//         setData(response.data.items);
//         console.log(response.data.items);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };

//     fetchData();
//   }, []);

useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response1 = await axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter');
        const response2 = await axios.get('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes');
        
        const combinedBooks = [...response1.data.items, ...response2.data.items];
        setData(combinedBooks);
      } catch (error) {
        console.error('Error fetching initial book data:', error);
      }
    };

    fetchData(); 
  }, []); 



  return (
    <div className="home">
      <div className="home-container">
        <div className="home-container-heading">
          <h3>Books</h3>
        </div>
        <div className="home-container-data">
          {data &&
            data.map((item) => (
              <div key={item.id} className="home-container-books">
                <img
                  src={item.volumeInfo.imageLinks.thumbnail}
                  alt={item.volumeInfo.title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;