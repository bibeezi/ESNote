// Import routing package
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// Import functional components
import NonUserHome from './components/NonUserHome/NonUserHome';
import UserHome from './components/UserHome/UserHome';
import CreateNote from './components/CreateNote/CreateNote';
import CreateNotebook from './components/CreateNotebook/CreateNotebook'
import EditNote from './components/EditNote/EditNote';
import ReadNote from './components/ReadNote/ReadNote';
import ReadNotebook from './components/ReadNotebook/ReadNotebook';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={ <NonUserHome /> }></Route>
          <Route path='/user-home' element={ <UserHome /> }></Route>
          <Route path='/create-note-template' element={ <CreateNote /> }></Route>
          <Route path='/create-notebook-template' element={ <CreateNotebook /> }></Route>
          <Route path='/edit-note' element={ <EditNote /> }></Route>
          <Route path='/read-note' element={ <ReadNote /> }></Route>
          <Route path='/read-notebook' element={ <ReadNotebook /> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;