import React from "react";
import PropsMapping from "./components/PropsMapping.jsx"
import PropsExample from "./components/PropsExample.jsx"

function App() {
  const visitedPlaces = ['Rome', 'Florence', 'Almafi', 'Venice', 'Pisa']
  return (<div>
    <PropsExample
    name="Tom"
    business="MySpace" />
    <PropsMapping visited= {visitedPlaces} />
  </div>)
}

export default App;
