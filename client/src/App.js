// Import routing package
import {
  BrowserRouter,
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

const App = () => {
  return (
    // Displays the correct component corresponding to the URL in the browser
    <BrowserRouter>
      <div className='App'>
        {/* A list of all components to be shown by the browser */}
        <Routes>
            <Route exact path='/' element={ <NonUserHome /> }></Route>
            <Route path='/user-home' element={ <UserHome /> }></Route>
            <Route path='/create-note-template' element={ <CreateNote /> }></Route>
            <Route path='/create-notebook-template' element={ <CreateNotebook /> }></Route>
            <Route path='/edit-note' element={ <EditNote /> }></Route>
            <Route path='/read-note' element={ <ReadNote /> }></Route>
            <Route path='/read-notebook' element={ <ReadNotebook /> }></Route>
            <Route path='*' element={ <NonUserHome /> }></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;