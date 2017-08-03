import React, { Component } from 'react';
const UserData = ({image, name, age, phone, index}) => {
  return (
  <tr key={index}>
        <td><img src={data.image}  className="user-image" /></td>
        <td> {data.name} </td>
        <td> {data.age} </td>
        <td> {data.phone} </td>
    </tr>
  );
}
export default UserData;
