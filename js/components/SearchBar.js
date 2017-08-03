import React, { Component } from 'react';
export default ({ inputValue, data, UpdateData }) =>{
    const FilterItems = (e) =>{
        let newData = data.filter((i) =>{
           return i.name.toLowerCase().indexOf(e.target.value) >= 0
        })
        UpdateData({inputValue : e.target.value, data : newData})
        
        
    }
    return (
        <div className="searchbar form-group" >
            <input value="" type="text" className="form-control" onChange={FilterItems} value={inputValue} placeholder="Search people by name..." />
        </div>
    );
}




