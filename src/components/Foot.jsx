import React, { useContext } from "react";
import { Appcontext } from "../context/context";

const Foot = () => {
  const { handlepagechange, page, totalPage } = useContext(Appcontext);
  return (
    <div>
      <h1 className=" text-center font-medium py-3 shadow-2xl fixed bg-[#A85751] left-0 right-0 bottom-0 z-10 flex justify-evenly  items-center text-[#C97B84]">
        <div>
          {page > 1 && (
            <button
              onClick={() => handlepagechange(page - 1)}
              className=" px-3 py-2 border-2 ml-2 rounded-md bg-[#251351]"
            >
              Previous
            </button>
          )}
          {page < totalPage && (
            <button
              onClick={() => handlepagechange(page + 1)}
              className=" px-3 py-2 border-2 ml-2 rounded-md bg-[#251351]"
            >
              Next
            </button>
          )}
        </div>
        <div className=" grid place-items-center text-[#251351]">
          <p>
            {page} of {totalPage}
          </p>
        </div>
      </h1>
    </div>
  );
};

export default Foot;
