import React, { useEffect, useState } from 'react';
import Blog from '../blog/Blog';
import BookMarkBlog from '../bookmark/BookMarkBlog';
import './AllBlogs.css'

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([])
    const [bookmarks, setBookmarks] = useState([])
    const [time, setTime] = useState([])
    useEffect(() => {
        const url = 'data.json'
        fetch(url)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const addToBookmark = (blog) => {
        console.log(bookmarks)
        const name = blog.name
        const newBookmark = [...bookmarks, name]
        setBookmarks(newBookmark)
    }

    const markAsRead = (id) => {
        const bookmarkTime = [...time]
        for (const blog of blogs) {
            if (id == blog.id) {
                bookmarkTime.push(blog.time)
            }

        }
        //console.log(bookmarkTime)
        setTime(bookmarkTime)
    }
    //  console.log('time ',time)
    let sum = 0
    time.forEach(num => {
        sum += num;
    })

    // console.log('bookmarks ', bookmarks)
    return (
        <div className='container-fluid row'>

            <div className="col-8">
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        addToBookmark={addToBookmark}
                        markAsRead={markAsRead}
                    ></Blog>)
                }
            </div>
            <div className="col-4 mt-4">
                <div className='position-sticky top-0'>
                    <div id='spend-read' className='p-4 rounded fw-bold'>
                        Spend on read: {sum}
                    </div>
                    <div className='bg-secondary-subtle mt-3 p-3 rounded'>
                        <h5>Bookmark Blogs </h5>
                        {
                            bookmarks.map(bookmark => <BookMarkBlog bookmark={bookmark}></BookMarkBlog>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllBlogs;