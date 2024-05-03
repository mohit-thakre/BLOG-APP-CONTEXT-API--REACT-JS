import React from "react";

const Card = ({ post }) => {
  return (
    <div className="w-full md:w-[700px] m-1 text-[#C97B84]  ">
      <div className="bg-[#251351] my-10 p-5 shadow-2xl shadow-[#251351] rounded-lg hover:scale-110 duration-100">
        <h1 className=" font-bold text-3xl my-3 md:text-2xl ">{post.title}</h1>
        <i>
          {post.author} on <span className=" font-bold">{post.category}</span>
        </i>
        <p className="font-light ">posted on {post.date}</p>
        <p className=" font-medium my-2">{post.content}</p>
        <i className=" font-bold text-sm text-blue-900 ">
          {post.tags.map((tag) => (
            <span className="underline mx-1"> #{tag} </span>
          ))}
        </i>
      </div>
    </div>
  );
};

export default Card;
