import React from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmarkAdd, handleRead }) => {
    const {
        blogThumbnail,
        authorImages,
        authorName,
        blogPublishDate,
        readTime,
        blogTitle,
    } = blog;
    return (
        <div className="mb-10">
            <img src={blogThumbnail} alt={blogTitle} className="rounded-lg" />
            <div className="my-2 md:my-5 flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex items-center gap-2 md:gap-3 lg:gap-5">
                    <div className="w-16 h-16 object-cover rounded-full overflow-hidden cursor-pointer">
                        <img src={authorImages} alt={authorName} />
                    </div>
                    <div>
                        <h3 className="text-base md:text-xl lg:text-2xl font-bold">{authorName}</h3>
                        <p className="text-[#355834] text-sm md:text-base">{blogPublishDate}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 my-2 md:my-0">
                    <p className="text-[#355834] text-sm md:text-base">
                        {readTime < 10 ? "0" + `${readTime}` : `${readTime}`}min
                        read
                    </p>
                    <span
                        className="text-[#355834] cursor-pointer"
                        onClick={() => handleBookmarkAdd(blog)}
                    >
                        <FaRegBookmark />
                    </span>
                </div>
            </div>
            <h3 className="text-lg md:text-2xl lg:text-3xl my-3 md:my-5 font-medium">{blogTitle}</h3>
            <p
                onClick={() => handleRead(blog)}
                className="text-lg md:text-xl inline-block text-[#355834] hover:underline font-bold cursor-pointer"
            >
                Mark as read
            </p>
        </div>
    );
};

export default Blog;
