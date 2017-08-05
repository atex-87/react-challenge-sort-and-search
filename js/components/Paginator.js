import React, { Component } from 'react';

export default class Paginator extends Component {
    constructor(props) {
        super(props); 
        
    }  
   
    getPage(current){
         (current > 0 && current <= Math.floor(this.props.data.length/this.props.itemsOfPage)) ? this.props.UpdateData({current: current}) : false;
    }

    render(){
        
        if (!this.props.data || this.props.data.length<this.props.itemsOfPage){
            return false
        }
        const templite = [],
          current=  this.props.current;
        for (let i=1; i<=Math.floor(this.props.data.length/this.props.itemsOfPage); i++)
            templite.push(
                <li  key={i}  className={ i == current ? "active" : "" }>
                    <a href="javascript:;" onClick={()=>this.getPage(i)}> {i} </a>
                </li>
            )
        return (
            <ul className="pagination">
                
                <li><a onClick={()=>this.getPage(current-1)} href="javascript:;">&laquo;</a></li>

                {templite}

                <li><a onClick={()=>this.getPage(current+1)} href="javascript:;">&raquo;</a></li>
            </ul>
        );
    }
    
}



