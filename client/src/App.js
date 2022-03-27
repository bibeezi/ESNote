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
import NotebookTemplate from './components/CreateNotebook/NotebookTemplate'
import EditNote from './components/EditNote/EditNote';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={ <NonUserHome /> }></Route>
          <Route exact path='/user-home' element={ <UserHome /> }></Route>
          <Route exact path='/create-note-template' element={ <CreateNote /> }></Route>
          <Route exact path='/create-notebook-template' element={ <NotebookTemplate /> }></Route>
          <Route exact path='/edit-note' element={ <EditNote /> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;