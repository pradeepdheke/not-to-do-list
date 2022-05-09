import React, {useEffect, useState} from 'react';

import './App.css';
import { Title } from './components/Title';
import { Form } from './components/Form';
import { TaskList } from './components/TaskList';
import { BadList } from './components/BadList';
import { TotalHours } from './components/TotalHours';
import { fetchTasks, postTasks } from './helper/axiosHelper';

function App() {
  
  const [taskList, setTaskList] = useState([]);

  const [badList, setBadList] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [response, setResponse] = useState({});

  useEffect(()=>{

    const getTasks = async task => {
      setIsPending(true);

      const {status, result, message} = await fetchTasks();
      setIsPending(false);
      
      result === "error"  && setResponse({status, message});
      result?.length && setTaskList(result);
      console.log(result);
    };
    getTasks();
  },[]);
  
const addNewTask = async task => {
  setIsPending(true);
  const result = await postTasks(task);
  setIsPending(false);

  // setTaskList([...taskList, task]);
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
const total = ttlTaskHr + ttlBadHours;

  return (
    <div className="wrapper">

        <div className="container">
            {/* <!-- top title  --> */}
            <Title/>
{/* feedback message */}

{isPending &&(

  
  <div className="d-flex justify-content-center">
<div className="spinner-border text-primary" role="status">
  <span className='visually-hidden'>Loading...</span>
</div>

  </div>
    )};

    {response?.message && (

      <div className="alert alert-danger">{response.message}</div>
    )}

            {/* <!-- form area  --> */}
            <Form addNewTask={addNewTask} total={total}/>



             {/* <!-- list area  --> */}

             <div className="row">
               <TaskList taskList={taskList} handleOnDeleteTaskList={handleOnDeleteTaskList} markAsNotToDo={markAsNotToDo}/>
 
              <BadList badList={badList} handleOnDeleteBadList= {handleOnDeleteBadList} markAsTask={markAsTask} ttlBadHours={ttlBadHours}/>
                 
             </div>

             {/* total hours */}

             <TotalHours total={total}/>

 
        </div>;

    </div>
  );
}

export default App;
