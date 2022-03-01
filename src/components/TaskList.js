import React from 'react'

export const TaskList = ({taskList}) => {
console.log(taskList)

  return (
    <div class="col-md-6 mb-5">
    <h2 class="text-center">Task list</h2>
    <hr/>
    <div class="list-items">
       <table class="table table-striped w-100">
           
           <tbody id="task-list">
            {
                  taskList.map((item, i)=>    <tr>
                    <td>
                        <input type="checkbox" name="" id=""/>
                        {item.task}
                    </td>
                    <td>{item.hr}hrs</td>
                    <td class="text-end">
                        <button class="btn btn-danger btn-sm" onclick="deleteItem(${i})">
                          <i class="fa-solid fa-trash" title="Delete"></i>
                        </button>
                        <button class="btn btn-sm btn-warning" onclick="markAsNotToDo(${i})">
                          <i class="fa-solid fa-arrow-right" title="Mark as bad list"></i>
                        </button>
                    </td>
                 
                </tr>
                  
                
                    
                )
            }

           </tbody>
         </table>
    </div>
</div>

  )
}
