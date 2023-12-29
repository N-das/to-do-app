import AppName from "../AppName";
import Task from "../components/Task";

import "../App.css";
import { useEffect, useState } from "react";

import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import axios from "axios";

function Home() {
  const [todoitems, setToDoItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setToDoItems(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleWorkDone = (id) => {
    axios
      .put(`http://localhost:3001/update/${id}`, { done: true })
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleDel = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <center className="container">
      <AppName></AppName>
      <Task></Task>
      <br></br>
      <div id="border">
        <div className="container text-center">
          {todoitems.length === 0 ? (
            <div className="img">
              <img
                src="https://static.vecteezy.com/system/resources/previews/014/814/192/original/creatively-designed-flat-conceptual-icon-of-no-task-vector.jpg"
                alt=""
              />
              {/* <div id="flex">
                <h2 className="system">
                  <span className="sys"> System</span>
                  <span className="white">
                    .<span className="out">out</span>.
                  </span>
                  <span className="hexa">println</span>("
                </h2>
                <div id="string">
                  <h5 class="greeting en">Enjoy Your day</h5>
                  <h5 class="greeting es">No Task!</h5>
                </div>
                <h2 class="closure">");</h2>
              </div> */}
            </div>
          ) : (
            todoitems.map((item) => (
              // {
              //   console.log(item.task);
              // }
              <div className="padding">
                <div
                  className="row align-items-start column"
                  id={item.done ? "fill_color" : ""}
                  key={item._id}
                >
                  <div className="col-4 flex">
                    <div
                      className="checkbox"
                      onClick={() => handleWorkDone(item._id)}
                    >
                      {item.done ? (
                        <MdOutlineCheckCircleOutline className="icon" />
                      ) : (
                        <MdOutlineRadioButtonUnchecked className="icon" />
                      )}
                    </div>
                    <span>{item.task} </span>
                  </div>
                  <div className="col-6">
                    <span>{item.date}</span>
                  </div>
                  <div className="col handleEvent">
                    <button
                      type="button"
                      className="btn btn-danger del"
                      onClick={() => handleDel(item._id)}
                    >
                      DEL
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </center>
  );
}

export default Home;
