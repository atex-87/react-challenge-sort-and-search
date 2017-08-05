import React, { Component } from 'react';

export default class ToolBar extends Component {
    constructor(props) {
        super(props); 
        this.sortState = true;
    }
   
    setSortItems(indexKey){
        if(!this.props.data || this.props.data.length<2) return false
        let order =  this.sortState ? 1 : -1,
        newData = this.props.data.sort((a,b)=>{ if (a[indexKey] === b[indexKey]) return 0;
          return a[indexKey] > b[indexKey] ? order : order * -1;
        });
        this.sortState = !this.sortState;
        return this.props.UpdateData({data: newData})
    }
    render(){
          return (
              <div className="toolbar">  
                <button className="btn btn-default" onClick={() =>this.setSortItems("name")}>
                    <i className={`icon fa fa-sort-alpha-${this.sortState ? "desc": "asc"}`}></i>
                   <span> Sort by name</span>
                </button>
                <button className="btn btn-default" onClick={() =>this.setSortItems("age")}>
                     <i className={`icon fa fa-sort-alpha-${this.sortState ? "desc": "asc"}`}></i>
                    <span> Sort by name age</span>
                </button>
             </div>  
         );
    }

}
