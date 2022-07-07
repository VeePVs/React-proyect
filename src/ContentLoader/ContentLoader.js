import React from "react"
import ContentLoader from "react-content-loader"

const TodoLoad = (props) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={300}
    viewBox="0 0 280 300"
    backgroundColor="#c850c0bb"
    foregroundColor="#fa96f3b1"
    {...props}
  >
    <rect x="5" y="1" rx="10" ry="10" width="270" height="50" /> 
    <rect x="5" y="66" rx="10" ry="10" width="270" height="50" /> 
    <rect x="3" y="131" rx="10" ry="10" width="270" height="50" />
  </ContentLoader>
)

export {TodoLoad}