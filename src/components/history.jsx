import { useSelector } from "react-redux"

export const History = ()=>{
    const history = useSelector((state) => state.query.history)
    return(
        <>
        <div className="p-5 bg-gray-50 shadow-md rounded-lg">
        <div className="text-2xl font-semibold">Query History</div>
        {history.map((item, index) => (
          <div key={index}>{index+1}.{item.query}</div> 
        ))}
        </div>
        
        </>
    )
}