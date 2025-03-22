import Image from "next/image";
import Link from "next/link";
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
    _id
  } = blog;
  return (
    <div className="p-4 bg-white hover:shadow-2xl flex flex-col">
          <Link href={`/blogs/${_id}`}>
          <Image
            src={image}
            layout="responsive"
            width={100}
            height={100}
            alt={title}
          />
          </Link>
          <div className="flex flex-col flex-1">
          <Link href={`/blogs/${_id}`}><h3 className="text-3xl font-semibold mt-4">{title.slice(0,60)}</h3></Link>
          <p className="text-xl mt-3 flex-grow">{description.slice(0,110)}...</p>
          <div className="flex flex-wrap font-medium gap-2 mt-3">
                    <p>{authorName}</p>
                    <p>Created date: {date}</p>
                    <p>Comments: {comments.length}</p>
          </div>
          </div>
          
    </div>
  );
};

export default BlogCard;
