import box from "../note/images/Group 243.svg";
import round from "../note/images/round.svg";
import plus from "../note/images/plusicon.svg";
import React, { useState } from "react";

interface noteDataType {
  heading: String;
  Data: String;
  color: String;
}

const Note = () => {
  const [data, setData] = useState<noteDataType[]>([]);
  const [isTextareaVisible, setIsTextareaVisible] = useState(false);
  const [noteData, setNoteData] = useState("");
  const [noteItem, setNoteItem] = useState("");
  const backgroundColors = [
    "bg-red-300 hover:bg-red-500",
    "bg-blue-300 hover:bg-blue-500",
    "bg-green-300 hover:bg-green-500",
    "bg-yellow-300 hover:bg-yellow-500",
  ];
  const showTextarea = () => {
    setIsTextareaVisible((prev) => !prev);
  };
  console.log(data);
  return (
    <>
      <div className="grid w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="grid place-self-center w-36 h-8 rounded-full bg-black mt-3">
          <div className="bg-white rounded-full w-2 h-2 place-self-end my-3 mx-2"></div>
        </div>
        <div className="w-full overflow-visible  -mt-24 ">
          <div className="relative -bottom-44 overflow-visible left-14 bg-gradient-to-l from-indigo-300 via-purple-300 to-pink-300  rounded-3xl w-10/12 h-36"></div>
          <div className="absolute -top-26 bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 rounded-3xl w-11/12  h-40"></div>
          <img className="" src={box} />
          <img className="relative -top-36 left-10" src={round} />
        </div>
        <div className="grid grid-rows-4 grid-flow-col gap-4  ">
          {data
            .slice()
            .reverse()
            .map((value: any, index: any) => (
              <div
                onClick={() => {
                  setIsTextareaVisible(true);
                  setNoteData(value.heading);
                  setNoteItem(value.Data);
                }}
                key={index}
                className={` drop-shadow-2xl mx-5 h-10 rounded-2xl ${value.color}`}
                title={value.Data}
              >
                <h1 className="p-3 truncate w-20">{value.heading}</h1>
              </div>
            ))}
        </div>
        <div className=" flex  mt-4 ml-6">
          {isTextareaVisible && (
            <div className="flex">
              <input
                type="text"
                placeholder="Heading"
                className="bg-red-200 pl-5 rounded-l-2xl "
                onChange={(e) => setNoteData(e.target.value)}
                value={noteData}
              ></input>
              <textarea
                placeholder="Type your note"
                className=" w-36 h-36  bg-yellow-200 rounded-r-2xl  pt-10 "
                onChange={(e) => setNoteItem(e.target.value)}
                value={noteItem}
              ></textarea>
            </div>
          )}{" "}
          <br />
          <button
            className="relative left-20 top-6 w-36 bg-green-500 h-10 rounded-2xl hover:bg-green-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 "
            onClick={() => {
              if (noteData && noteItem) {
                if (data.find((item) => item.heading === noteData))
                  setData(
                    data.map((item) => {
                      if (item.heading === noteData) item.Data = noteItem;
                      return item;
                    })
                  );
                else {
                  setData([
                    ...data,
                    {
                      heading: noteData,
                      Data: noteItem,
                      color: backgroundColors[data.length % 4],
                    },
                  ]);
                }
                setNoteData(""), setNoteItem("");
              } else {
                if (!noteData && noteItem) alert("enter heading");
                else if (!noteItem && noteData) alert("enter note");
                else if (!noteData && !noteItem)
                  alert("enter heading and note");
              }
            }}
          >
            save
          </button>
          <button onClick={showTextarea}>
            <img className="relative left-20 top-6 w-36" src={plus} />
          </button>
          <button
            className="relative left-20 top-6 w-36 bg-red-500 h-10 rounded-2xl hover:bg-red-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            onClick={() => {
              setData(data.filter((value) => value.heading !== noteData));
              setNoteData(""), setNoteItem("");
            }}
          >
            delete
          </button>
        </div>
      </div>
    </>
  );
};
export default Note;
