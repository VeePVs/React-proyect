import React from "react"
import ContentLoader from "react-content-loader"
import "./ContentLoader.css"

const TodoLoad = (props) => (
  <ContentLoader 
    speed={3}
    width={"90%"}
    height={300}
    viewBox="0 0 100% 300"
    backgroundColor="#c850c0bb"
    foregroundColor="#fa96f3b1"
    {...props}
  >
    <rect x="5" y="11" rx="10" ry="10" width="98%" height="50" /> 
    <rect x="5" y="76" rx="10" ry="10" width="98%" height="50" /> 
    <rect x="5" y="141" rx="10" ry="10" width="98%" height="50" />
  </ContentLoader>
)

export {TodoLoad}