import React, { Component } from 'react';
import UserData from './UserData';


const UserList = ({data}) => {
   if(!this.props.data) return <p>Упс</p>
   let userData = data.map((user, index) =>{
    <table>
        <UserData data={user} index={index}/>
    </table>
  });
  
  return (
   userData
  );
}
export default UserList;