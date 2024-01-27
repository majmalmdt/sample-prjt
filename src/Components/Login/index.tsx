import logo from "../../Assets/image/logo.png"
import boy from "../../Assets/image/boy.svg"
import google from "../../Assets/image/google.svg"
import facebook from "../../Assets/image/facebook.svg"
import Form from "../../Components/InfraStructure/Form";

import { validateRegister } from "../../Validation"
import Social from "../Social";
import Button from "../Button";
import InputField from "../Input";


const Login = ()=> {
    return (
    <>
    <div className="absolute flex  w-full h-full bg-violet-950">

{/*left side star */}
<div className="bg-violet-950 max-sm:hidden">
<img className="relative top-5 left-5" src={logo}/>
<div className="px-10  text-white relative top-5 left-5 text-2xl leading-9 ">Find 3D Objects, Mockups
and Illustrator here.</div>
{/* boy image */}
<img className="relative -right-28 max-lg:right-0" src={boy}/>
</div>
{/*left side end */}
{/* right side start */}
<div className="grid place-content-center bg-white rounded-l-3xl max-sm:rounded-r-3xl w-full">
{/* left all items  */}
<div className="mt-10">
<br/><b className="text-slate-950 text-2xl font-extrabold leading-9 tracking-widest max-w-[213px]">Welcome Back</b><br/><br/>
{/* social login start */}
{/* <div className="flex space-x-5">
<a href="https://www.google.co.in/"><div className="flex border rounded-md "><img className="p-2 w-fit" src={google}></img><span className="text-zinc-600 text-xs leading-9 tracking-wider ">Login with Google &nbsp; </span></div></a>
<a href="https://www.facebook.com/"><div className="flex border rounded-md "><img className="p-2 w-fit" src={facebook}></img><span className="text-zinc-600 text-xs leading-9 tracking-wider ">Login with Facebook &nbsp;</span></div></a>

</div> */}
<div className="flex space-x-5">
<Social link="" image={google} name="Google"/>
<Social link="" image={facebook} name="Facebook"/>
</div>
{/* social login end */}
<br/>
<div className="text-center">- OR -</div>
<br/>

{/* login form star */}
<div>
  <form>
    <InputField onChange={(value,e)=>{}}/>
    <InputField onChange={(value,e)=>{}}/>
    <InputField onChange={(value,e)=>{}}/>

      {/* <input type="text" placeholder="Full Name" className="w-full border-b-4"></input> <br/><br/>
      <input type="email" placeholder="Email Address" className="w-full border-b-4"></input> <br/><br/>
      <input type="password" placeholder="Password" className="w-full border-b-4"></input><br /><br/> */}
      {/* <Form
        formStructure = {[
            {
                field: "name",
                label: "Name"
            },
            {
                field: "email",
                label: "Email"
            },
            {
                field: "phone",
                label: "Phone"
            }
        ]}
        emptyForm={{
            name:"",
            email:"",
            phone:""
        }}
        validateFunction={validateRegister}
        onSubmit={(d)=>console.log(d)}
      /> */}
      <Button label={'login'}/>
    
  </form><br/>
  <a href="/registration#" className="text-neutral-400 text-base leading-9 tracking-widest max-w-[276px]">Don't have an account? Register</a>
  


</div>
{/* login form end */}



</div>

</div>
{/* right side end */}






{/* end */}

</div>

    
    

    </>     
    )}
export default Login