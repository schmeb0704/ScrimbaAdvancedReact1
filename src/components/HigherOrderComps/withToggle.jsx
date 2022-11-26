import React from "react"

function Toggled(props){
  const [on, setOn] = React.useState(false)

  function changeOn(){
    setOn(prevOn => !prevOn)
  }

  const Component = props.component

  return(
    <Component {...props} isToggled={on} handleChange={changeOn}/>
  )
}


export function Toggler(component){
  return function (props){
    return (<Toggled component={component} {...[props]}/>)
  }
}