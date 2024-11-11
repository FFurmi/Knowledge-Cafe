import React from 'react';
import './BookMarkBlog.css'

const BookMarkBlog = (props) => {
    const  name = props.bookmark
    

    
    return (
        <div className='my-3 bookmark-name p-2 rounded'>
            <h6>{name}</h6>
        </div>
    );
};

export default BookMarkBlog;