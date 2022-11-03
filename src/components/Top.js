import React from "react";

export default function Top({ setlhs }) {
  let contents = ["A", "B", "C", "D", "E"];
  function dragstartFunction(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
  }
  return (
    <div class="  grid grid-cols-6 gap-4">
      {contents.map((content) => {
        return (
          <div
            id={`${content}`}
            draggable="true"
            onDragStart={(event) => {
              dragstartFunction(event);
            }}
            onClick={() => {
              setlhs(content);
            }}
            className=" hover:cursor-pointer hover:bg-green-400 border-solid border-2 border-green-500 rounded text-3xl  h-32  bg-green-500 flex items-center justify-center "
          >
            <span className=" ">{content}</span>
          </div>
        );
      })}
    </div>
  );
}
