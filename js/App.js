
import React, { Component } from 'react';
import UserList  from './components/UserList';
import ActiveUser  from './components/ActiveUser';
import ToolBar  from './components/ToolBar';
import SearchBar  from './components/SearchBar';


const load =  url => {
  return new Promise((success, fail) => {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.addEventListener('load', () => {
      request.status >= 200 && request.status < 400
        ? success(request.responseText)
        : fail(new Error(`Request Failed: ${request.statusText}`));
    });

    request.addEventListener('error', () => {
      fail(new Error('Network Error'));
    });

    request.send();
  });
};

export default class App extends Component {
  constructor(props) {
    super(props); 

    this.state = {
      data: null,
      activeIndex: 0,
      inputValue: ''
    };
    this.loadData(); 
  }
  UpdateData(params){
     this.setState(params)
  }
  loadData() {

    load('/data.json').then(users => {
      this.setState({
        data: JSON.parse(users)
      });

    });

  }
  
  getActiveUsers(key){
   this.setState({
        activeIndex: key
      });
  }
  render() {
    return (
      <div className="container app">
        <div className="row">
            <div className="col-xs-12">
              <SearchBar UpdateData={this.UpdateData.bind(this)} inputValue={this.state.inputValue}  data={this.state.data}/>
          </div>
        </div>
        <div className="row">
            <div className="col-xs-12">
              <ToolBar UpdateData={this.UpdateData.bind(this)} data={this.state.data}/>
          </div>
        </div>
        <div className="row">

          <div className="col-md-3">
              <ActiveUser data={this.state.data} activeIndex={this.state.activeIndex}/>
          </div>

          <div className="col-md-9">
            <UserList data={this.state.data} getActiveUser = {this.getActiveUsers.bind(this)}/>
          </div>        
        </div>
       
      </div>
    );
  }
}
