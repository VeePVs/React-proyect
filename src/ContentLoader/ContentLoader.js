import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={3}
    width={300}
    height={300}
    viewBox="0 0 300 300"
    backgroundColor="#b0b0b0"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="1" y="10" rx="10" ry="10" width="294" height="30" />
  </ContentLoader>
)

export default MyLoader