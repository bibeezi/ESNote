// Import routing package
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// Import functional components
import NonUserHome from './components/NonUserHome/NonUserHome';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={ <NonUserHome /> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;