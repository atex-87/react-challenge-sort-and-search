import React from 'react';
import UserData from './UserData';


const UserList = ({data, current, itemsOfPage, getActiveUser}) => {
  let userTemplite; 
    if(!data) return <p>"Упс"</p> 
   else{
      if(data.length==0) return <p>Нет результатов</p>
      const itemStart = (current - 1) * itemsOfPage,
            finish = itemsOfPage * current-1;
      userTemplite = data.map((user, index) =>{
          if(itemStart<=index && index<=finish)
            return(       
              <UserData data={user} index={index} getActiveUser={getActiveUser}/>
            )
    });
   } 
  return (<table className="user-list table table-striped">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Age</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {userTemplite}
            </tbody>
          </table> 
        )
}
export default UserList;