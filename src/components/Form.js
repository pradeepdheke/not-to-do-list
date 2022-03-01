import React, {useState} from 'react';

const initialState = {task: "", hr: ""}
export const Form = ({addNewTask}) => {

    const [newTask, setNewTask] = useState(initialState);

    const handleOnChange = e => {
        const {value, name} = e.target;
        setNewTask({
            ...newTask,
            [name] : name === "hr" ? +value : value,
        });
    };

    const handleOnSubmit = e => {
        e.preventDefault();

        addNewTask(newTask);
        setNewTask(initialState);
    };


  return (
    <div class="row">
    <div class="col">
        <div class="form-box py-5">
            
            <form class="row row-cols-md-auto d-flex justify-content-center g-3"
            
            onSubmit={handleOnSubmit}
            >
                <div class="col-12">
                  <label class="visually-hidden" for="inlineFormInputGroupUsername">Your task</label>
                  <div class="input-group">
                    
                    <input type="text" name="task" 
                    value={newTask.task}
                    class="form-control" 
                    onChange = {handleOnChange}
                    id="inlineFormInputGroupUsername" placeholder="Your task"/>
                  </div>
                </div>

                <div class="col-12">
                    <label class="visually-hidden" for="inlineFormInputGroupUsername">Hours</label>
                    <div class="input-group">
                      
                      <input type="number" name="hr" 
                      value={newTask.hr}
                      class="form-control" 
                      onChange={handleOnChange}
                      id="inlineFormInputGroupUsername" placeholder="Hours"/>
                    </div>
                  </div>
              
               
              
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
        </div>
    </div>
</div>
  )
}
