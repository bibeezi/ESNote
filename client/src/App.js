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