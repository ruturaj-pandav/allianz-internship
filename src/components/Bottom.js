import React from "react";

export default function Bottom({
  rest,
  rhs,
  setrest,
  removefromrest,
  setrhs,

  solve,
  reset,
}) {
  function onDragOver(event) {
    event.preventDefault();
  }
  function onFileDrop(event) {
    event.preventDefault();

    const id = event.dataTransfer.getData("text");
    setrest(id);
  }
  return (
    <div>
      <div
        className="  px-3 hover:cursor-pointer hover:bg-gray-300   h-40 bg-gray-200  grid grid-cols-10 border border-dashed border-4 border-gray-500 py-2 "
        onDrop={onFileDrop}
        onDragOver={onDragOver}
      >
        {rest.length > 0 ? (
          <>
            {rest.map((content, i) => {
              return (
                <div className=" block  border-solid border-2 border-black-500 rounded     bg-green-500  ">
                  <div>
                    <span
                      className="inline-block text-right hover:scale-110 hover:bg-green-400 transition-300 text-white my-1 text-xs py-1  font-bold px-2 rounded-sm font-500"
                      onClick={() => {
                        removefromrest(i);
                      }}
                    >
                      X
                    </span>
                  </div>
                  <span className="block text-5xl my-3 ">{content}</span>
                </div>
              );
            })}

            {rhs != null && (
              <div className="mx-3 border-solid border-2 border-green-500 rounded text-3xl    bg-green-100 flex items-center justify-center ">
                <span className=" ">{rhs}</span>
              </div>
            )}
          </>
        ) : (
          <span>drag here </span>
        )}
      </div>
      <button
        className="bg-blue-900 text-white text-2xl  px-3 py-2 rounded-lg my-5 hover:bg-blue-800 "
        onClick={() => {
          solve();
        }}
      >
        Evaluate
      </button>
      <br />
      <button
        className="bg-orange-500 text-white text-sm  px-3 py-2 rounded-lg my-5 hover:bg-orange-400 transition duration-200 "
        onClick={() => {
          reset();
        }}
      >
        reset
      </button>
    </div>
  );
}
