import React from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmarkAdd, bookmarkAdd, handleRead }) => {
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
            <div className="my-5 flex justify-between items-center">
                <div className="flex items-center gap-5">
                    <div className="w-16 h-16 object-cover rounded-full overflow-hidden cursor-pointer">
                        <img src={authorImages} alt={authorName} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">{authorName}</h3>
                        <p className="text-[#355834]">{blogPublishDate}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <p className="text-[#355834]">
                        {readTime < 10 ? "0" + `${readTime}` : `${readTime}`}min
                        read
                    </p>
                    <span
                        className="text-[#355834] cursor-pointer"
                        onClick={handleBookmarkAdd}
                    >
                        {/* {bookmarkAdd ? <FaBookmark /> : */} <FaRegBookmark />{/* } */}
                    </span>
                </div>
            </div>
            <h3 className="text-3xl my-5 font-medium">{blogTitle}</h3>
            <p 
            onClick={()=>handleRead(blog)}
            className="text-xl inline-block text-[#355834] hover:underline font-bold cursor-pointer">
                Mark as read
            </p>
        </div>
    );
};

export default Blog;
