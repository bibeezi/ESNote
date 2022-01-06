// Import styles, and routing packages
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

// Import functional components
import NonUserHome from './NonUserHome';
import UserHome from './UserHome';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={ <NonUserHome /> }></Route>
          <Route path='/user' element={ <UserHome /> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;