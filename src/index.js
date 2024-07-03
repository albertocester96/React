import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

import './index.css';


const Image = () => {
    return <img src="https://cdn.prod.website-files.com/64e4adc68bf2ad345ebaa879/64faf957a3ec304c249b73de_case-study-weschool-p-500.png" alt="book"/>
}

const Book = () => {
    return(
    <article className='book'> 
        <Image /> 
        <h4 style={{color: "red", fontSize: 20 }}> Questa è la mia immagine</h4>
    </article>
    );
}

const BookList = () => {
    return(
        <>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />    
        <Book />
        </>
    );
}

const root= createRoot(document.getElementById('root'));
root.render(<BookList />)
