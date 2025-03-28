import { useSelector } from "react-redux"

export const History = ()=>{
    const history = useSelector((state) => state.query.history)
    return(
        <>
        <h1>history</h1>
        {history.map((item, index) => (
          <div key={index}>{item.query}</div> 
        ))}
        </>
    )
}