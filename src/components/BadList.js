import React from 'react'

export const BadList = ({badList, markAsTask, handleOnDeleteBadList, ttlBadHours}) => {

  return (
    <div className="col-md-6">
    <h2 className="text-center">Bad list</h2>
    <hr/>
    <div className="list-items">
        
       <table className="table table-striped w-100">
           
           <tbody id="bad-list">
        {   badList.map((item, i)=>{
             return (
        <tr>
        <td>
            <input type="checkbox" name="" id=""/>
            {item.task}
        </td>
        <td>{item.hr}hrs</td>
        <td className="text-end">

            <button className="btn btn-sm btn-warning" onClick={()=>markAsTask(i)}>
              <i className="fa-solid fa-arrow-left" title="Mark as bad list"></i>
              </button>
              

              <button className="btn btn-danger btn-sm" onClick={()=>handleOnDeleteBadList(i)}>
              <i className="fa-solid fa-trash" title="Delete"></i>
            
            </button>
        </td>
     
    </tr>
             );
    })}
           

           </tbody>
         </table>
    </div>
    {/* <!-- <div className="ttl-bad">You could saved 50hrs of your time</div> --> */}
    <div class="ttl-bad text-end text-light">Total time saved = <span id = "totalBadHrs">{ttlBadHours}</span> hrs</div>
</div>
  )
}
