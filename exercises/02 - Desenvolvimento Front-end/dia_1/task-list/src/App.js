import './App.css';

function App() {
  const tasks = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3', 'Tarefa 4', 'Tarefa 5', 'Tarefa 6'];

  const task = (value) => {
    return (
      value.map(data => <ul> <li> {data} </li> </ul>)
    );
  }
  return ( <div>
    {task(tasks)}
  </div>
  )
  }

export default App;
