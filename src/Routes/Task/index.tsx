import Form from "../../Components/InfraStructure/Form";
import { validateRegister } from "../../Validation";
import React, { useState } from 'react';
import Table from "../../Components/Table";
import useFetch from "../../Hooks/useFetch";


interface MyObject {
  icon?:any;
  name: string;
  age: string;
  DOB: string;
  class: string;
  Phno?:Number;

}

const Task = () => {
  // Initialize the state with an empty array
  const [myArray, setMyArray] = useState<MyObject[]>([]);
 const {data} = useFetch("/student/all")
  // Function to update the array
  const updateArray = () => {
    // Use setMyArray to update the state with a new array of objects
    setMyArray([
      { name: 'Ramu', age: '15', DOB: '4-11-2008', class: '10' , },
      { name: 'gopika', age: '23', DOB: '6-2-2008', class: '11' },
      { name: 'sasi', age: '43', DOB: '18-4-2008', class: '04' },
      { name: 'gopu', age: '43', DOB: '18-4-2008', class: '04' },
      { name: 'gopu', age: '43', DOB: '18-4-2008', class: '04' },
      { name: 'geethu', age: '43', DOB: '18-4-2008', class: '04' }, 
      { name: 'ravan', age: '43', DOB: '18-4-2008', class: '04' },
      { name: 'nambi', age: '15', DOB: '4-11-2008', class: '10' , }
    ]);
  };
console.log(myArray);

  return (
    <div className="px-6" >
      
      <div className="absolute -z-50 w-full h-20  -m-9 bg-cyan-500 mx-2">
      <h1 className="text-white mx-5  text-3xl	">Students Data</h1>
      </div>
      <div className="bg-white absolute w-11/12 mx-6 -mt-1  -z-10 h-full z-5 shadow-2xl">
        
      <button className="text-blue-600 relative left-5" onClick={updateArray}>Update Array</button>
      </div>
      
      {/* Render the array of objects in your component */}
      <Table data={myArray}/>
     
    </div>
  );
};

export default Task;
