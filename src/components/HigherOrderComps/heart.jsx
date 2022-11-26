
import {Toggler} from "./withToggle"

function Icons(props){
  let classText = props.isToggled ? "bx bxs-heart" : "bx bx-heart"

  return(
    <>
      <div onClick={props.handleChange}>
        <i className={classText}></i>
      </div>
    </>
    
  )
}

export default Toggler(Icons)