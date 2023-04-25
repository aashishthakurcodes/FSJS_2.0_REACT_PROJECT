import React, { useState, useEffect } from "react";

// Getting the data (local Storage)
const getlocaldata = () => {
  const lists = localStorage.getItem("My_todo");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Todo = () => {
  // Hooks
  const [inputval, setinput] = useState();
  const [initial_data, setInitial] = useState(getlocaldata());
  const [editItem, setEdit] = useState("");

  // it add the user input in the user_input div
  const add_data = () => {
    //if user doesn't give any input
    if (!inputval) {
      alert("Sorry !! No input found... ");
    }

    //After taking input set a unique id for it using  new Date().getTime().toString() that is basically current time
    else {
      const newData = {
        id: new Date().getTime().toString(),
        name: inputval,
      };

      // edit existing data
      if (editItem) {
        setInitial(
          initial_data.map((currelem) =>
            currelem.id === editItem
              ? { ...currelem, name: inputval }
              : currelem
          )
        );
        setEdit(" ");
      } else {
        // add new data
        setInitial([...initial_data, newData]);
        setinput("");
      }
    }
  };
  // for delete individual user's item 
  const deleteitem = (index) => {
    const remove = initial_data.filter((currElem) => {
      return currElem.id !== index;
    });
    setInitial(remove);
  };

  // To delete all items
  const delete_all = () => {
    setInitial([]);
  };
  //

  //setting the data (Local storage)
  useEffect(() => {
    localStorage.setItem("My_todo", JSON.stringify(initial_data));
  }, [initial_data]);

  // Edit _item function
  const edit_item = (index) => {
    const edit = initial_data.find((currelem) => {
      return currelem.id === index;
    });
    setinput(edit.name);
    setEdit(index);
  };

  return (
    <>
      
      <div className="main">
        <h1 style={{ color: "#ffff", textAlign: "center" }}>To do App</h1>
        <div className="container">
          <input
            type="text"
            placeholder="Enter some text.."
            value={inputval}
            onChange={(e) => setinput(e.target.value)}
          />
          <button onClick={add_data}>Add</button>
        </div>
        <div className="delete_btn">
          <button onClick={delete_all}>Delete All</button>
        </div>
      </div>
      {/* Data Display  user input divs */}
      <div className="user_data">
        {initial_data.map((Adde_element) => {
          return (
            <>
              <div className="user_input">
                <div className="data_each" key={Adde_element.id}>
                  <h2>{Adde_element.name}</h2>
                </div>
                <div className="user_btn">
                  <i
                    onClick={() => {
                      edit_item(Adde_element.id);
                    }}
                    class="fa-regular fa-pen-to-square fa-lg"
                  ></i>
                  <i
                    onClick={() => {
                      deleteitem(Adde_element.id);
                    }}
                    class="fa-solid fa-trash-can fa-lg"
                  ></i>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
