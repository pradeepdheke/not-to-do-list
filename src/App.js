import React, {useState} from 'react';

import './App.css';
import { Title } from './components/Title';
import { Form } from './components/Form';
import { TaskList } from './components/TaskList';
import { BadList } from './components/BadList';
import { TotalHours } from './components/TotalHours';

function App() {
  
  const [taskList, setTaskList] = useState([]);
  
const addNewTask = newTask => {
  setTaskList([...taskList, newTask]);


};

console.log(taskList);

  return (
    <div class="wrapper">

        <div class="container">
            {/* <!-- top title  --> */}
            <Title/>

            {/* <!-- form area  --> */}
            <Form addNewTask={addNewTask}/>



             {/* <!-- list area  --> */}

             <div class="row">
               <TaskList taskList={taskList}/>
 
              <BadList/>
                 
             </div>

             {/* total hours */}

             <TotalHours/>

 
        </div>

    </div>
  );
}

export default App;
