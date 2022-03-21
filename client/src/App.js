// Import routing package
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// Import functional components
import NonUserHome from './components/NonUserHome/NonUserHome';
import UserHome from './components/UserHome/UserHome';
import NoteTemplate from './components/CreateNote/NoteTemplate';
import NotebookTemplate from './components/CreateNotebook/NotebookTemplate'

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={ <NonUserHome /> }></Route>
          <Route exact path='/user-home' element={ <UserHome /> }></Route>
          <Route exact path='/create-note-template' element={ <NoteTemplate /> }></Route>
          <Route exact path='/create-notebook-template' element={ <NotebookTemplate /> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;