import React, {useState} from 'react';

import './App.css';
import { Title } from './components/Title';
import { Form } from './components/Form';
import { TaskList } from './components/TaskList';
import { BadList } from './components/BadList';
import { TotalHours } from './components/TotalHours';

function App() {
  
  const [taskList, setTaskList] = useState([]);

  const [badList, setBadList] = useState([]);
  
const addNewTask = newTask => {
  setTaskList([...taskList, newTask]);
}
// delete the task item from taskList
const handleOnDeleteTaskList = i => {
  console.log(i);

  if (window.confirm("Are you sure you want to delete this task?")){


    
    const newArg = taskList.filter((item, index)=> index !== i);
    setTaskList(newArg);
  }
};
// delete the task item from badList
const handleOnDeleteBadList = i => {
  console.log(i);

  if (window.confirm("Are you sure you want to delete this task?")){


    
    const newArg = badList.filter((item, index)=> index !== i);
    setBadList(newArg);
  }
};

// take item form taskList and put in the badList
const markAsNotToDo = i => {
  const selectedItem = taskList[i];
  setBadList([...badList, selectedItem]);
  const newArg = taskList.filter((item, index)=> index !== i);
  setTaskList(newArg);
};

console.log(badList);
// take item form badList and put in the taskList
const markAsTask = i => {
  const selectedItem = badList[i];
  setTaskList([...taskList, selectedItem]);
  const newArg = badList.filter((item, index)=> index !== i);
  setBadList(newArg);
};

const ttlTaskHr = taskList.reduce((subttl, item)=>subttl + item.hr, 0);
const ttlBadHours = badList.reduce((acc, curr)=>acc + curr.hr, 0);

  return (
    <div class="wrapper">

        <div class="container">
            {/* <!-- top title  --> */}
            <Title/>

            {/* <!-- form area  --> */}
            <Form addNewTask={addNewTask}/>



             {/* <!-- list area  --> */}

             <div class="row">
               <TaskList taskList={taskList} handleOnDeleteTaskList={handleOnDeleteTaskList} markAsNotToDo={markAsNotToDo}/>
 
              <BadList badList={badList} handleOnDeleteBadList= {handleOnDeleteBadList} markAsTask={markAsTask} ttlBadHours={ttlBadHours}/>
                 
             </div>

             {/* total hours */}

             <TotalHours ttlTaskHr={ttlTaskHr + ttlBadHours}/>

 
        </div>;

    </div>
  );
}

export default App;
