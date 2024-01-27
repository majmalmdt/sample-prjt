import logo from "../../Assets/image/logo.png"
import boy from "../../Assets/image/boy.svg"
import google from "../../Assets/image/google.svg"
import facebook from "../../Assets/image/facebook.svg"
import Social from "../Social"


const Registration = ()=> {
    return (
    <>
    <div className="absolute w-full h-full flex bg-violet-950">


 {/* right side start */}
<div className="grid place-content-center bg-white rounded-r-3xl max-sm:rounded-l-3xl w-full">
{/* left all items  */}
<div className="mt-10">
<br/><b className="text-slate-950 text-2xl font-extrabold leading-9 tracking-widest max-w-[213px]">Create Account</b><br/><br/>
{/* social login start */}
{/* <div className="flex space-x-5">
<a href="https://www.google.co.in/"><div className="flex border rounded-md "><img className="p-2 w-fit" src={google}></img><span className="text-zinc-600 text-xs leading-9 tracking-wider ">Login with Google &nbsp; </span></div></a>
<a href="https://www.facebook.com/"><div className="flex border rounded-md "><img className="p-2 w-fit" src={facebook}></img><span className="text-zinc-600 text-xs leading-9 tracking-wider ">Login with Facebook &nbsp;</span></div></a>

</div> */}
<Social/>
{/* social login end */}
<br/>
<div className="text-center">- OR -</div>
<br/>

{/* login form star */}
<div>
  <form>
      <input type="text" placeholder="Full Name" className="w-full border-b-4"></input> <br/><br/>
      <input type="text" placeholder="Age" className="w-full border-b-4"></input> <br/><br/>
      <input type="text" placeholder="Place" className="w-full border-b-4"></input> <br/><br/>
      <input type="text" placeholder="Address" className="w-full border-b-4"></input> <br/><br/>
     
      <input type="email" placeholder="Email Address" className="w-full border-b-4"></input> <br/><br/>
      <input type="password" placeholder="Password" className="w-full border-b-4"></input><br /><br/>
      <button className="bg-violet-950 rounded-md text-white py-2 px-10 w-full"> Creat Account</button>
  </form><br/>
  <a href="/login" className="text-neutral-400 text-base leading-9 tracking-widest max-w-[276px]">Already have an account? Log in</a>
  


</div>
{/* login form end */}



</div>

</div>
{/* right side end */}
{/*left side star */}
<div className="bg-violet-950 max-sm:hidden">
<img className="relative top-5 left-5" src={logo}/>
<div className="px-10  text-white relative top-5 left-5 text-2xl leading-9 ">Find 3D Objects, Mockups
and Illustrator here.</div>
{/* boy image */}
<img className="relative -left-28 max-lg:left-0" src={boy}/>
</div>
{/*left side end */}





{/* end */}

</div>

    
    

    </>     
    )}
export default Registration