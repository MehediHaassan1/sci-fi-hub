import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("blogs.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    return (
        <div className="grid grid-cols-5 gap-8 mt-5">
            <div className="col-span-3  ml-5">
                {blogs.map((blog) => (
                    <Blog key={blog._id} blog={blog}></Blog>
                ))}
            </div>
            <div className="col-span-2 bg-red-900">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur perspiciatis quae cum ut dolore ex iure, suscipit quis
                odio. Quam.
            </div>
        </div>
    );
};

export default Blogs;
