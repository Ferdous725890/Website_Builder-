import Image from "next/image";
import React from "react";

const BlogCard = ({ blog }) => {
  const {
    image,
    title,
    category,
    description,
    authorName,
    authorEmail,
    date,
    comments,
  } = blog;
  return (
    <div className="p-4 bg-white hover:shadow-2xl">
          <Image
            src={image}
            layout="responsive"
            width={100}
            height={80}
            alt={title}
          />
          <div className="flex flex-col space-y-3">
          <h3 className="text-3xl font-semibold mt-4">{title.slice(0,70)}</h3>
          <p className="text-xl">{description.slice(0,200)}...</p>
          <div className="flex flex-wrap font-medium gap-2">
                    <p>{authorName}</p>
                    <p>Created date: {date}</p>
                    <p>Comments: {comments.length}</p>
          </div>
          </div>
    </div>
  );
};

export default BlogCard;
