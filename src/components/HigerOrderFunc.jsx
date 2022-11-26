import { withFavoriteNumber } from "./withFavNumber"

function HOC(props) {
  console.log(props)
  return (
      <div>Hello world! I am number {props.favNum}. {props.favPhrase}</div>
  )
}

export default withFavoriteNumber(HOC, 42)