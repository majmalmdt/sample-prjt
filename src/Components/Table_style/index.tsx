import buttonImage from "../../Assets/image/588a64e0d06f6719692a2d10.png";

interface PropsTypes{
    updateArray: () => void;
}



const Tstyle = ( {updateArray}:PropsTypes)=> {
  const nav=["▢ Students Data","Email","upload version","Send to","Copy/Move","Rename","Download","More ▼ "]
    return(
        <>
        <img className="absolute top-3 right-5 lg:hidden bg-cyan-500 w-7 " src={buttonImage}/>
        <div className="absolute -z-50 w-full h-24  -m-20 bg-cyan-500 mx-2  ">
          <span className="max-lg:hidden flex py-3 mx-6 space-x-20">
          {nav.map((item, index) => (
            <h5 key={index} className="text-gray-600 hover:text-white">{item}</h5>
          ))}
          </span>
        </div>
        <div className="bg-white absolute w-11/12 mx-6 -mt-10  -z-10 h-full z-5 shadow-2xl">    
        <button className="text-blue-600 relative left-5 top-2" onClick={updateArray}>Update Array &#62; ... &#62;</button> 
        <span className="mx-9 py-8"> <b className="absolute top-2"> McNorman -2015 -Docs</b></span>
        </div>
        </>
   
   
   
   
   
   

   
   
        )}
export default Tstyle;
