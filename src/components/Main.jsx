import React, { useContext } from "react";
import Card from "./Card";
import { Appcontext } from "../context/context";

const Main = () => {
  const { loading, post } = useContext(Appcontext);

  return (
    <div className=" w-full min-h-screen flex justify-center items-center flex-col text-[#C97B84]">
      {loading ? (
        <h1 className=" text-3xl font-extrabold ">Loading...</h1>
      ) : !post ? (
        <h1>No posts found</h1>
      ) : (
        post.map((post) => <Card key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Main;
