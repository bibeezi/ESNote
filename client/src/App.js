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
          <Route exact path='/user-home' element={ <UserHome /> }></Route>
          <Route exact path='/create-note-template' element={ <CreateNote /> }></Route>
          <Route exact path='/create-notebook-template' element={ <CreateNotebook /> }></Route>
          <Route exact path='/edit-note' element={ <EditNote /> }></Route>
          <Route exact path='/read-note' element={ <ReadNote /> }></Route>
          <Route exact path='/read-notebook' element={ <ReadNotebook /> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;