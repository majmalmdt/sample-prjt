

interface PropsTypes {
    type:string;
    placeholder:string;
    onChange?: (value: string, e: any) => void;
    value?: string;


}

const Inputs = ({type,placeholder,onChange,value}:PropsTypes )=> {
      return( <>
         
        <input value={value} type={type} placeholder={placeholder} className="w-full border-b-4" onChange={(e) => onChange && onChange(e.target.value, e)}></input> <br/><br/>  
      </>
      )}
export default Inputs