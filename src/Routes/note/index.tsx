import boxicon from "../note/images/Group 243.svg";
import roundicon from "../note/images/round.svg";
import plusicon from "../note/images/plusicon.svg";
import React, { useState } from "react";

interface noteDataType {
  heading: string;
  data: string;
  color: string;
}

const Note = () => {
  const [data, setData] = useState<noteDataType[]>([]);
  const [isTextareaVisible, setIsTextareaVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [noteData, setNoteData] = useState("");
  const [noteItem, setNoteItem] = useState("");
  const [showDate, setShowDate] = useState(true);
  const formattedDateAndTime = new Date().toLocaleString();
  const [message, setMessage] = useState(formattedDateAndTime);
  const backgroundColors = [
    "bg-red-300 hover:bg-red-500",
    "bg-blue-300 hover:bg-blue-500",
    "bg-green-300 hover:bg-green-500",
    "bg-yellow-300 hover:bg-yellow-500",
  ];

  const showTextarea = () => {
    setIsTextareaVisible((prev) => !prev);
  };
  const showButton = () => {
    setIsButtonVisible((prev) => !prev);
  };

  const showMessage = (msg: string) => {
    setMessage(msg);
  };
  return (
    <>
      
      <div className="grid w-4/6 bg-gray-500 mr-20 drop-shadow-2xl m-10 rounded-2xl p-3">
        <div className="grid place-self-center w-56 h-8  rounded-full bg-black mt-3  text-center pt-1 mx-1 ">
          <div className={` ${showDate?'text-green-500' : 'text-red-500 animate-pulse'}`}>{message}</div>
          <div className="bg-white absolute rounded-full animate-bounce w-2 h-2 place-self-end my-3 mx-2"></div>
        </div>
        <div className="w-full overflow-visible  -mt-24 ">
          <div className="relative -bottom-44 overflow-visible left-14 bg-gradient-to-l from-indigo-300 via-purple-300 to-pink-300  rounded-3xl w-5/12 h-36"></div>
          <div className="absolute -top-26 bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 rounded-3xl w-96  h-40"></div>
          <img className="" src={boxicon} alt="box icon" />
          <img className="relative -top-36 left-10 " src={roundicon} alt="round icon" />
        </div>
        <div className="grid grid-rows-4 grid-flow-col gap-4  ">
          {data
            .slice()
            .reverse()
            .map((value: any, index: any) => (
              <div
                onClick={() => {
                  setIsButtonVisible(true);
                  setShowDate(true);
                  showMessage(formattedDateAndTime);
                  setIsTextareaVisible(true);
                  setNoteData(value.heading);
                  setNoteItem(value.data);
                }}
                key={index}
                className={` drop-shadow-2xl mx-5 h-10 rounded-2xl ${value.color}`}
                title={value.data}
              >
                <h1 className="p-3 truncate w-20">{value.heading}</h1>
              </div>
            ))}
        </div>
        <div className="flex  mt-4 ">
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
          )}
          <br />
          {isButtonVisible && (
            <button
              className="relative left-20 top-6 w-36 bg-green-500 h-10 rounded-2xl hover:bg-green-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 "
              onClick={() => {
                if (noteData && noteItem) {
                  setShowDate(true);
                  showMessage(formattedDateAndTime);
                  if (data.find((item) => item.heading === noteData))
                    setData(
                      data.map((item) => {
                        if (item.heading === noteData) item.data = noteItem;
                        return item;
                      })
                    );
                  else {
                    setData([
                      ...data,
                      {
                        heading: noteData,
                        data: noteItem,
                        color: backgroundColors[data.length % 4],
                      },
                    ]);
                  }
                  setNoteData("");
                  setNoteItem("");
                } else {
                  setShowDate(false);
                  if (!noteData && noteItem) showMessage("Enter heading");
                  else if (!noteItem && noteData) showMessage("Enter note");
                  else if (!noteData && !noteItem) showMessage("Enter heading and note");
                }
              }}
            >
              save
            </button>
          )}
          <button onClick={() => {
            showTextarea();
            showButton();
            setShowDate(true);
            showMessage(formattedDateAndTime);
            setNoteItem("");
          }}>
            <img className="relative left-20 top-6  w-36" src={plusicon} alt="plus icon" />
          </button>
          {isButtonVisible && (
            <button
              className={`relative left-20 top-6 w-36 bg-red-500 h-10 rounded-2xl hover:bg-red-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${!noteItem && 'opacity-50 cursor-not-allowed'}`}
              onClick={() => {
                setShowDate(true);
                showMessage(formattedDateAndTime);
                setData(data.filter((value) => value.heading !== noteData));
                setNoteData("");
                setNoteItem("");
              }}
              disabled={!noteItem && !noteData}
            >
              delete
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default Note;
