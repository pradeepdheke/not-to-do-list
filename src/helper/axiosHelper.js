// import axios from 'axios'

const rootUrl = 'http://localhost:8000/api/v1';
const taskApi = `${rootUrl}/task`;

// fetch tasks
 export const fetchTasks = () => {
     return fetch(taskApi)
     .then(res => res.json())
     .then(data => data)
 };

//  post new task
export const postTasks = data => {
    return fetch(taskApi, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch(error => {
        console.log("Error:", error)
    })
};

// delete a task