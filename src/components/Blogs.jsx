import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("blogs.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    // const [bookmarkAdd, setBookmarkAdd] = useState(false);
    const handleBookmarkAdd = () => {

    };

    const [readTime, setReadTime] = useState(0);
    const handleRead = (blog) => {
        const newTime = readTime + blog.readTime;
        setReadTime(newTime);
    };

    return (
        <div className="grid grid-cols-5 gap-8 mt-5">
            <div className="col-span-3  ml-5">
                {blogs.map((blog) => (
                    <Blog
                        key={blog._id}
                        blog={blog}
                        bookmarkAdd={bookmarkAdd}
                        handleBookmarkAdd={handleBookmarkAdd}
                        handleRead={handleRead}
                    ></Blog>
                ))}
            </div>
            <div className="col-span-2 flex flex-col gap-5 h-screen sticky top-0">
                <div className="border border-[#355834] rounded-lg p-4 text-xl text-center text-[#355834] font-bold">
                    Spent time on read : {readTime} min
                </div>
                <div className="bg-[#c0ffc0] h-full rounded-lg text-black pl-5 pt-5">
                    <h3 className="text-3xl font-semibold mb-5">Bookmarked Blogs : 05</h3>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
