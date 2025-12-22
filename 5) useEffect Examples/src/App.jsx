// Tracking element visibility:
// In this example, the external system is again the browser DOM. The 'App' component displays a long list, then a 'Box' component, and then another long list. Scroll the list down. Notice that when all of the 'Box' component is fully visible in the viewport, the background color changes to black.
// To implement this, the 'Box' component uses an Effect to manage an 'IntersectionObserver'. The browser API notifies you when the DOM element is visible in the viewport. 

import Box from "./Box"

const App = () => {
  return (
    <>
      <LongSection />
      <Box />
      <LongSection />
      <Box />
      <LongSection />
    </>
  )
}
export default App

const LongSection = ()=>{
  const items = [];
  for(let i=0; i<50; i++){
    items.push(<li key={i}>Item # {i}.. (keep scrolling)</li>)
  }
  return <ul>{items}</ul>
}