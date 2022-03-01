import React from 'react'

export const BadList = () => {
  return (
    <div class="col-md-6">
    <h2 class="text-center">Bad list</h2>
    <hr/>
    <div class="list-items">
        
       <table class="table table-striped w-100">
           
           <tbody id="bad-list">
           

           </tbody>
         </table>
    </div>
    {/* <!-- <div class="ttl-bad">You could saved 50hrs of your time</div> --> */}
    <div class="ttl-bad text-end text-light">Total time saved = <span id = "totalBadHrs">0</span> hrs</div>
</div>
  )
}
