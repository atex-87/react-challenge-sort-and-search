import React, { Component } from 'react';
const UserData = ({data, index, getActiveUser}) => {
  return (
    
  <tr key={index} onClick={() => getActiveUser(index)}>
        <td><img src={`images/${data.image}.svg`}  className="user-image" /></td>
        <td> {data.name} </td>
        <td> {data.age} </td>
        <td> {`8 ${data.phone}`} </td>
    </tr>
  );
}
export default UserData;
