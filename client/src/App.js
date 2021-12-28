import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {

  // contains the values of the form
  state = {
    title: '',
    body: '',
    pages: []
  };
  
  // get pages from Database when added to DOM
  componentDidMount = () => {
    this.getPages();
  };

  getPages = () => {
    axios.get('/getPages')
    .then((res) => {
      console.log(res);
      const data = res.data;
      this.setState({ pages: data });
      console.log("Data received from the Database!");
    })
    .catch((error) => {
      console.log("ERROR OCCURRED IN getPages");
    });
  };

  // updates the state's values
  handleChange = ({ target }) => {
    // target is the element that is triggering the event
    const { name, value } = target;

    this.setState({
      // [name] is dynamically assigned to the element's attribute
      [name]: value
    });
  };

  // submit the form
  submit = (event) => {
    // prevents browser refresh
    event.preventDefault();

    const payload = {
      title: this.state.title,
      body: this.state.body
    };

    // send data to the server
    axios({
      url: '/savePage',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log("Data was sent to the server!");
      this.getPages();
    })
    .catch(() => {
      console.log("ERROR OCCURRED in axios - /savePage");
    });
  };

  // show Pages in a list
  showPages = (pages) => {
    if(!pages.length) {
      return null;
    }

    return pages.map((page, index) => (
      <div key={index} className="page-list">
        <div className="page-content">
          <h3>{page.title}</h3>
          <p>{page.body}</p>
        </div>
      </div>
    ));
  };

  render() {

    // prints the state every update
    console.log('State ', this.state);

    // JSX
    return (
    <div>
      <header>
        <h1>ESNote</h1>
      </header>

      <div className="form-div">
        <form onSubmit={this.submit}>
          <div className="form-input" id="title-input">
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Type the Title of this note here!"/>
          </div>
          <div className="form-input" id="body-input">
            <textarea name="body" cols="30" rows="10" value={this.state.body} onChange={this.handleChange} placeholder="Type your Notes here!"></textarea>
          </div>
          <div id="button-input">
            <button>Save</button>
          </div>
        </form>
      </div>
      
      <div className="page-div">
        {this.showPages(this.state.pages)}
      </div>
    </div>
    );
  }
}

export default App;