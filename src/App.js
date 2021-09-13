import './App.css';
// import { useEffect, useState } from 'react';
import Search from './components/Search';


const App = () => {
  // const [tasks, setTasks] = useState([])

  // useEffect(() => {
  //   const getTasks = async () =>{
  //     const tasksFromServer = await fetchTasks()
  //     // setTasks(tasksFromServer)
  //   }
  //   getTasks()
  // },[])

  // const [text, setText] = useState('')
  //   const onSubmit = (e) => {
  //       e.preventDefault()
    
  //       if (!text) {
  //         alert('Please add a task')
  //         return
  //       }
    
    
  //       setText('')
  //     }

  // const fetchTasks = async (searchdata) => {
  //   const res = await fetch('http://localhost:8080/api', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(searchdata),
  //     })
  
  //   const data = await res.json()
  
  //   console.log(data)
  //   return data
  // }

  return (
          <div className="App">
            <Search />
          </div>
  );
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
