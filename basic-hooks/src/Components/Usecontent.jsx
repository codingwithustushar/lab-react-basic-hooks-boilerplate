import {useContext} from 'react'
import { ToggleTheme } from "../App";

function Usecontext() {
    const theme = useContext(ToggleTheme);
    const themeStyle = {
      backgroundColor: theme?"black":"grey",
      color:theme?"grey":"black",
      padding:"2rem",
      margin:"2rem"
    }
  return (
      <div style={themeStyle}>
      This is made by Kalvium
    </div>
  )
}

export default Usecontext