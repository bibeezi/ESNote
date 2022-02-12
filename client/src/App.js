// Import routing package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

// Import functional components
import NonUserHome from './components/NonUserHome/NonUserHome';
import UserHome from './components/UserHome/UserHome';
import EditNote from './components/EditNote/EditNote';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={ <NonUserHome /> }></Route>
          <Route path='/user' element={ <UserHome /> }></Route>
          <Route path='/editNotes' element= { <EditNote /> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;