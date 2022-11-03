import React from "react";

export default function Middle({ setoperator, setrhs, setlhs }) {
  function dragstartFunction(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
  }
  let signs = ["+", "-", "*", "/"];
  let comparison = ["<", ">"];
  let RHS = ["RHS integer"];
  return (
    <div class="  grid grid-cols-7 gap-4 my-5 ">
      {signs.map((content) => {
        return (
          <div
            draggable="true"
            onDragStart={(event) => {
              dragstartFunction(event);
            }}
            id={`${content}`}
            onClick={() => {
              setlhs(content);
            }}
            className="hover:cursor-pointer hover:bg-red-500 hover:text-white  border-solid border-2 border-red-400 rounded  h-32 align-middle inline-block bg-red-400 flex items-center justify-center "
          >
            <span className="text-4xl">{content}</span>
          </div>
        );
      })}
      {comparison.map((content) => {
        return (
          <div
            draggable="true"
            onDragStart={(event, content) => {
              dragstartFunction(event, content);
            }}
            id={`${content}`}
            onClick={() => {
              setoperator(content);
            }}
            className=" hover:cursor-pointer hover:bg-red-500 hover:text-white border-solid border-2 border-red-400 rounded  h-32 align-middle inline-block bg-red-400 flex items-center justify-center "
          >
            <span className=" text-4xl">{content}</span>
          </div>
        );
      })}
      {RHS.map((content) => {
        return (
          <div
            onClick={() => {
              let userinput = window.prompt("enter digit");
              if (userinput !== null) {
                setrhs(parseInt(userinput));
              }
            }}
            className="transition duration-150 hover:scale-110 hover:cursor-pointer hover:bg-red-500 hover:text-white border-solid border-2 border-red-400 rounded  h-32 align-middle inline-block bg-red-400 mx-1 flex items-center justify-center "
          >
            <span className=" text-2xl ">{content}</span>
          </div>
        );
      })}
    </div>
  );
}
