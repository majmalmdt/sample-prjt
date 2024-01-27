import { useState } from 'react';
import Table from "../../Components/Table";
import Tstyle from "../../Components/Table_style";
import useFetch from "../../Hooks/useFetch";
import logo from "../../Assets/image/—Pngtree—wolf logo_2306634.png";

interface MyObject {
  icon?:string;
  name: string;
  age: string;
  DOB: string;
  class: string;
  Phno?:string;
}

const Task = () => {
  // Initialize the state with an empty array
  const [Array, setArray] = useState<MyObject[]>([]);
 const {data} = useFetch("/student/all")
  // Function to update the array
  const updateArray = () => {
    // Use setArray to update the state with a new array of objects
    setArray([
      { name: 'Ramu', age: '15', DOB: '4-11-2008', class: '10' ,Phno:"5546545",icon:logo},
      { name: 'gopika', age: '23', DOB: '6-2-2008', class: '11' },
      { name: 'sasi', age: '43', DOB: '18-4-2008', class: '04' },
      { name: 'gopu', age: '43', DOB: '18-4-2008', class: '04' },
      { name: 'gopu', age: '43', DOB: '18-4-2008', class: '04' },
      { name: 'geethu', age: '43', DOB: '18-4-2008', class: '04' }, 
      { name: 'ravan', age: '43', DOB: '18-4-2008', class: '04' },
      { name: 'nambi', age: '15', DOB: '4-11-2008', class: '10' , }
    ]);
  };

  return (
    <div className="px-6" >
      <Tstyle updateArray={updateArray}></Tstyle> 
      <Table data={Array}/>
    </div>
  );
};

export default Task;
