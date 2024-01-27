
interface PropsTypes {
    data:any;
}

const Table = ({data}:PropsTypes )=> {
    return(
        <table className="w-11/12 mx-8 mt-20 bg-white ">
        <thead >
          <tr >
              
            {Object.keys((data as any)?.[0] as object || {}).map((key) => (
                <th className="text-gray-900 text-left" key={key}>{key}<div className="bg-gray-800 w-full h-px"></div></th>
                ))}
          </tr>
        </thead> 
               
        <tbody >
          {(data as any)?.map((item:any, index:number) => (
            <tr text-current key={index}>
              {Object.values(item).map((value:any, index:any) => (
               index===5?<img className="w-10" src={value}/> : <td className={`${value ===item[Object.keys(item)[0]]? "bg-white text-left font-bold text-current py-3":"bg-white text-gray-900 text-left"}`}  key={index}>{value}</td>
))}
            </tr>
          ))}
        </tbody>
      </table>
        
    )
}
export default Table;