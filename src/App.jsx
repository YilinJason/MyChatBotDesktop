import {  BrowserRouter as Router, useRoutes } from 'react-router-dom';
import './App.css';
import router from './router';
const GetRoutes = () => {

  const routes = useRoutes(router);

  return routes;
};

function App() {
  return  <Router>
 
        <GetRoutes />
    
</Router>
}

export default App;
