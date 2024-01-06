import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import toast, { Toaster } from "react-hot-toast";
import { addToDbReadTime, getReadTimeValue } from "../utilities/fakeDb";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("blogs.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    const [bookmarkAdd, setBookmarkAdd] = useState([]);
    const handleBookmarkAdd = (blog) => {
        if (bookmarkAdd.indexOf(blog.blogTitle) > -1) {
            toast("Already bookmarked", {
                icon: "ℹ️",
                style: { background: "#355834  ", color: "#fff" },
            });
        } else {
            const newItemAdded = [...bookmarkAdd, blog.blogTitle];
            setBookmarkAdd(newItemAdded);
            toast.success("Bookmark added", {
                position: "top-center",
            });
        }
    };

    const [readTime, setReadTime] = useState(0);
    const handleRead = (blog) => {
        const newTime = readTime + blog.readTime;
        setReadTime(newTime);
        addToDbReadTime(newTime);
    };

    useEffect(() => {
        const getTime = getReadTimeValue();
        const time = getTime?.time;
        if (!time) {
            setReadTime(0);
        } else {
            setReadTime(time);
        }
    }, []);

    return (
        <div className="grid grid-cols-5 gap-8 mt-5">
            <div className="col-span-3  ml-5">
                {blogs.map((blog) => (
                    <Blog
                        key={blog._id}
                        blog={blog}
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
                    <h3 className="text-3xl font-semibold mb-5">
                        Bookmarked Blogs : {bookmarkAdd.length}
                        <div>
                            {bookmarkAdd.map((item, index) => (
                                <p className="text-lg my-5 mr-5" key={index}>
                                    {index + 1}. {item}
                                </p>
                            ))}
                        </div>
                    </h3>
                    <Toaster></Toaster>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
