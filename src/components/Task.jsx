import React, { useState } from "react";

import axios from "axios";

function Task() {
  // const todoNameElement = useRef();
  // const todoDateElement = useRef();
  const [task, setTask] = useState();
  const [date, setDate] = useState();

  const ButtonClicked = () => {
    axios
      .post("http://localhost:3001/add", { task: task, date: date })

      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter your task"
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            onChange={(a) => setDate(a.target.value)}
            id="pointer"
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success button" onClick={ButtonClicked}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Task;
