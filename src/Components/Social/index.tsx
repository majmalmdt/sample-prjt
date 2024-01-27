

interface PropsTypes {
    link:string;
    image:string;
    name:string;
}

const Social = ({link,image,name}:PropsTypes )=> {
      return( <>
        <a href={link}><div className="flex border rounded-md "><img className="p-2 w-fit" src={image}></img><span className="text-zinc-600 text-xs leading-9 tracking-wider ">Login with {name} &nbsp; </span></div></a>  
      </>
      )}
export default Social