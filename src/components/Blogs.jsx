import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import toast, { Toaster } from "react-hot-toast";
import {
    addTitleToDb,
    addToDbReadTime,
    getReadTimeValue,
    getTitleFromDb,
} from "../utilities/fakeDb";

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
            addTitleToDb(blog._id, blog.blogTitle);
            toast.success("Bookmark added", {
                position: "top-center",
            });
        }
    };

    useEffect(() => {
        const getBookmarked = getTitleFromDb();
        const titleArray = [];
        for (const id in getBookmarked) {
            const getTitle = getBookmarked[id];
            titleArray.push(getTitle);
        }
        setBookmarkAdd(titleArray);
    }, []);

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
        <div className="grid grid-flow-row-dense gap-8 mt-5 mx-3 md:grid-flow-col-dense md:grid-cols-5">
            <div className="col-span-5 md:col-span-3">
                {blogs.map((blog) => (
                    <Blog
                        key={blog._id}
                        blog={blog}
                        handleBookmarkAdd={handleBookmarkAdd}
                        handleRead={handleRead}
                    ></Blog>
                ))}
            </div>
            <div className="col-span-5 md:col-span-2 flex flex-col gap-5 h-screen sticky top-0">
                <div className="border border-[#355834] rounded-lg p-2 text-lg lg:text-xl lg:p-4 text-center text-[#355834] font-bold">
                    Spent time on read : {readTime} min
                </div>
                <div className="bg-[#c0ffc0] h-full rounded-lg text-black pl-5 pt-5">
                    <h3 className="text-xl lg:text-3xl font-semibold mb-5">
                        Bookmarked Blogs : {bookmarkAdd.length}
                    </h3>
                    <div>
                        {bookmarkAdd.map((item, index) => (
                            <p className="text-base md:text-lg my-5 mr-5" key={index}>
                                {index + 1}. {item}
                            </p>
                        ))}
                    </div>

                    <Toaster></Toaster>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
