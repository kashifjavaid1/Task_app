import CreateTodo from "@/app/(components)/createTodo/CreateTodo";
import React from "react";

export default function page() {
  return (
    <div>
      <div
        className={` bg-[radial-gradient(#F9F5EB_1px,transparent_6px)] [background-size:30px_30px] `}
      >
        <div>
          <div className=" bg-[radial-gradient(#F9F5EB_1px,transparent_6px)] [background-size:30px_30px] ">
            <CreateTodo />
          </div>
        </div>
      </div>
    </div>
  );
}
