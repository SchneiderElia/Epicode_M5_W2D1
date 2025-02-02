import React from 'react'
import Card from 'react-bootstrap/Card'
import dati from './books/history.json'
import { useState } from 'react'
import SearcBar from './SearchBar'

function CardBooks (props){

  const [color, setColor] = useState(false);
  
    const handelClick = () => {
      setColor(!color)
    }
  
  
    return (
        <Card className='p-0' style={{ width: '240px', cursor:'pointer', boxShadow: color ? '0 0 15px 3px green' : 'none' }} onClick={handelClick}>
          {/* <Card.Img variant="top" src={props.img}/> */}
          <div className='image-container'>
            <img src={props.img}/>
          </div>
          <Card.Body style={{ height: '120px' }}>
            <p className='title'>{props.title}</p>
          </Card.Body>
          <div className='px-3'>
            <p>€{props.price}</p>
          </div>

        </Card>
      );
}

function AllTheBooks () {

  const [libriFiltrati, setLibriFiltrati] = useState(dati); 

  const handleSearch = (searchTerm) => {
    const filtered = dati.filter(book => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setLibriFiltrati(filtered); 
  };

   return (
    <div className='row gap-4 justify-content-center'>
      <SearcBar onSearch={handleSearch} />
    {libriFiltrati.map(books => (
        <CardBooks
            key={books.asin}
            img={books.img}
            title={books.title}
            price={books.price}
            >
        </CardBooks>
    ))}
</div>
   )
}


export default AllTheBooks