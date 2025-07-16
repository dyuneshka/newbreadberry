import React from 'react'; 
import Header from './components/Header'
import Homepage from './components/Homepage'
import axios from 'axios';





function App() {

  const [items, setItems] = React.useState([])

  React.useEffect(() => {
      axios.get("http://localhost:3000/homeitems").then((response) => {
        setItems(response.data.homeitems)
      })
     
  }, [])

  return (
    <div className="App">
        <Header/>
        <div>
            <Homepage data={items}/>

        </div>

    </div>
  );
}

export default App;
