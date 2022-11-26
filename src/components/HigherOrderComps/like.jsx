import {Toggler} from "./withToggle"

function Like(props){
  let classText = props.isToggled ? "bx bxs-like" : "bx bx-like"

  return(
    <>
      <div onClick={props.handleChange}>
        <i className={classText}></i>
      </div>
    </>
    
  )
}

export default Toggler(Like)