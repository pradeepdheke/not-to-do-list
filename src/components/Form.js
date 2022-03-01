import React, {useState} from 'react';

const weeklyHours = 24*7;
const initialState = {task: "", hr: ""}
export const Form = ({addNewTask, total}) => {

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

        if (newTask.hr < 1) {
            return alert("Please enter a positive value of hours.")
        }

        if (total + newTask.hr > weeklyHours) {
            return alert("You have exceeded the weekly hours.")

        }

        addNewTask(newTask);
        setNewTask(initialState);
    };


  return (
    <div className="row">
    <div className="col">
        <div className="form-box py-5">
            
            <form className="row row-cols-md-auto d-flex justify-content-center g-3"
            
            onSubmit={handleOnSubmit}
            >
                <div className="col-12">
                  <label className="visually-hidden" >Your task</label>
                  <div className="input-group">
                    
                    <input type="text" name="task" 
                    value={newTask.task}
                    className="form-control" 
                    onChange = {handleOnChange}
                    id="inlineFormInputGroupUsername" placeholder="Your task"/>
                  </div>
                </div>

                <div className="col-12">
                    <label className="visually-hidden" >Hours</label>
                    <div className="input-group">
                      
                      <input type="number" name="hr" 
                      value={newTask.hr}
                      className="form-control" 
                      onChange={handleOnChange}
                      id="inlineFormInputGroupUsername" placeholder="Hours"/>
                    </div>
                  </div>
              
               
              
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
        </div>
    </div>
</div>
  )
}
