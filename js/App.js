import React, { Component } from 'react';
import Button from './components/Button';
import UserList  from './components/UserList';

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
      phrase: 'Нажми на кнопку!',
      count: 0
    };
    //this.loadData(); 
  }

  componentDidMount(){
    this.loadData();
  }

  loadData() {

    load('/data.json').then(users => {

      this.setState({
        data: JSON.parse(users)
      });

    });

  }


  updateBtn() {
    
    this.setState({
      count: this.state.count + 1,
      phrase: phrases[parseInt(Math.random() * phrases.length)]
    });

  }

  render() {
    return (
      <div className="container app">
        <Button count={this.state.count} update={this.updateBtn.bind(this)} />
        <p style={{marginTop: 2 + 'rem'}}>{this.state.phrase}</p>
        <UserList data={this.state.data}/>
      </div>
    );
  }
}
