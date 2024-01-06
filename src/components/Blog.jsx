import React from "react";

const Blog = ({ blog }) => {
    const {
        blogThumbnail,
        authorImages,
        authorName,
        blogPublishDate,
        readTime,
        blogTitle,
    } = blog;
    return (
        <div className="my-10">
            <img src={blogThumbnail} alt={blogTitle} className="rounded-lg"/>
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
                <div>
                    <h6>{readTime} min read</h6>
                </div>
            </div>
            <h3>{blogTitle}</h3>
            <h3>Mark as read</h3>
        </div>
    );
};

export default Blog;
