import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookmark } from '@fortawesome/free-solid-svg-icons'
const Blog = (props) => {
    const { id, name, author, img, date, authorImg, time } = props.blog
    const addToBookmark = props.addToBookmark
    const markAsRead = props.markAsRead
  
   // console.log(props.blog)
    return (
        <div className="row my-3">
            <div className="col p-2">
                <img  className='img-fluid rounded' src={img} alt="" />
                <div className='d-flex justify-content-between align-items-center mt-2'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img id='author-img' src={authorImg} alt="" />
                        <div className='mt-3 ms-2'>
                            <h5>{author}</h5>
                            <p className='text-secondary'>{date}</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                            <p className='text-secondary '>
                                {time} Minutes ago
                                
                            </p>
                            <button onClick={()=>addToBookmark(props.blog)} id='btn-bookmark' className='ms-2 '><p className='top-0 text-secondary'><FontAwesomeIcon icon={faBookmark} /></p></button>
                    </div>
                </div>
                <h3>{name}</h3>
                <button onClick={()=>markAsRead(id)} id='btn-read'>Mark as read</button>
            </div>
        </div>
    );
};

export default Blog;