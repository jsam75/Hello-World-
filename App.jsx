//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

import sunflowerImage from "./assets/sunflower4.jpg"

function App() {
  //const [count, setCount] = useState(0)

  return <>
    <h1>Hello World!</h1>
    <img src={sunflowerImage} />
    <p> Photo by 
     <a href="https://unsplash.com/@aaronburden?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Aaron Burden </a> 
     on <a href="https://unsplash.com/photos/sunflower-field-under-blue-sky-during-daytime-2IzoIHBgYAo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
    Unsplash</a>
   </p>
  </>
}
    
    
    
    
       
    /*<>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/
export default App
