import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from './components/table';
import Navbar from "./components/navbar";


function App() {
  const [dataTable, serDataTable] = useState([]);
  console.log(dataTable);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users`)
      .then(res => serDataTable(res.data))
      .catch(err => console.log(err))
  }, []);

  const column = [
    { heading: 'id', value: 'id'},
    { heading: 'Name', value: 'name'},
    { heading: 'Details', value: 'details'},
    { heading: 'price', value: 'price'}
  ]

  return (
    <div className="App">
       <Navbar/>
      <h1 className="mt-5 text-4xl text-center">Hey Dynamic Table</h1>
      <Table data={dataTable} column={column} />
    </div>
  );
}

export default App;