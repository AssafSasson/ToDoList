import React, { useState } from "react";
import { useDataProvider } from "../providers/Data.provider";
import { useNavigate } from "react-router-dom";

function FullList() {
  const nav = useNavigate();
  const [checkedTask, setCheckedTask] = useState(0);
  const { todoList } = useDataProvider();


  const deleteFunc = () => {
    
    alert("Deleted");
  };

  const checkedTaskBox = () => {
    if (checkedTask === 0) {
      alert("checked!");
      return setCheckedTask(1);
    } else if (checkedTask === 1) {
      alert("unchecked!");
      return setCheckedTask(0);
    }
  };
  return (
    <form>
      <div>
        {todoList.map((t, i) => {
          return (
            <div key={i} style={{ border: "solid black 2px" }}>
              <button
                style={{
                  marginRight: "90%",
                  color: "red",
                  backgroundColor: "darkgray",
                }}
                onClick={() => {
                  deleteFunc();
                }}
              >
                X
              </button>
              <p>
                <span style={{ color: "green" }}>Task Name : </span>{" "}
                {t.taskName}
              </p>

              <input
                id="checkbox"
                style={{ marginLeft: "90%" }}
                onChange={() => {
                  checkedTaskBox(setCheckedTask(1));
                }}
                type="checkBox"
              />
              <p>
                <span style={{ color: "blue" }}>Task Describe :</span>{" "}
                {t.taskDescribe}
              </p>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <br />
      <div>
        <div>
          <button
            style={{ padding: "10px", backgroundColor: "transparent" }}
            onClick={() => {
              nav("/");
            }}
          >
            HomePage
          </button>
          <button
            style={{
              marginLeft: "10px",
              padding: "10px",
              backgroundColor: "transparent",
            }}
            onClick={() => {
              nav("/add");
            }}
          >
            Add A New Task
          </button>
        </div>
      </div>
    </form>
  );
}

export default FullList;
