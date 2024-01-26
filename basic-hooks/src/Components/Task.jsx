import { useEffect, useState } from "react";
import { useContext } from "react";
import { ToggleTheme } from "../App";

function Task() {
  const [count, setCount] = useState(0);
  const [Content, setContent] = useState(false);

  const theme = useContext(ToggleTheme);

  useEffect(() => {
    alert("Content button clicked");
  }, [Content]);

  const themeStyle = {
    backgroundColor: theme ? "black" : "grey",
    color: theme ? "grey" : "black",
    padding: "2rem",
    margin: "2rem",
  };
  let handlelike = () => {
    setCount(count + 1);
  };
 
  return (
    <div className="Container" style={themeStyle}>
      {Content &&
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore pariatur voluptate provident expedita quaerat, ut quo neque? Assumenda saepe quasi consequuntur, voluptas architecto dolores quos! Pariatur animi accusamus in voluptate aperiam itaque maiores? Cum dolor amet nobis eius iusto nesciunt minus nemo, illo rerum magnam expedita velit ex nisi quaerat?"}
        <br />
      <button style={{margin:"10px"}} onClick={()=>setContent(!Content)}>Content</button>
      <h3>{count}</h3>
      <button onClick={handlelike}>Like</button>
    </div>
  );
}

export default Task;