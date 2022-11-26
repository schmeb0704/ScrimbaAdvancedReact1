/**
 * A function that takes a component as its first argument and returns a new component that wraps
 * the given component, providing extra capabilities to it.
 * 
 * Challenge: Write a higher-order component that passes a new prop to the given component
 * called "favoriteNumber" and includes your own, personal, favorite number
 * 
 * Then, in App.js, render that favorite number to the screen
 */

 export function withFavoriteNumber(component, num=4){
  const Component =  component
  return function(props){
    return(
      <Component favNum={num} {...props}/>
    )
  }
}