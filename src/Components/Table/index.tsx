import { object } from "joi";

interface PropsTypes {
    data:object;
}

const Table = ({data}:PropsTypes )=> {
    return(
        <table className="w-11/12 mx-8 mt-20 bg-white ">
        <thead >
          <tr >
              
            {Object.keys((data as any)?.[0] as object || {}).map((key) => (
                <th className="text-slate-800 text-left" key={key}>{key}<div className="bg-gray-800 h-px"></div></th>
                ))}
          </tr>
        </thead> 
               
        <tbody >
          {(data as any)?.map((item:any, index:number) => (
            <tr text-current key={index}>
              {Object.values(item).map((value:any, index:any) => (
                <td className={`${value ===item[Object.keys(item)[0]]? "bg-white text-left font-bold text-current":"bg-white text-slate-800 text-left"}`}  key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
        
    )
}
export default Table;