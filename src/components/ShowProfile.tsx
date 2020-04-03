import React from 'react';
import { Profile } from '../model/Profile'

/*
interface IProfileProps {
  userName: string;
  name: string;
  company: string;
  avatar_url: string;  
}

*/
/*
//export const ShowProfile: React.FunctionComponent<IProfileProps> = ({
  export const ShowProfile: React.FunctionComponent<Profile> = ({  
    userName,
    name,
    company,
    avatar_url}) => {
    return (
        <div id="profile-results">
          {userName && <p className="userName">UserName: {userName}</p>}
          {name && <p className="name">Name: {name}</p>}
          {company && <p className="company">Company: {company}</p>}        
          {avatar_url && <img style={{width:50, height:50}} src={avatar_url} />}
        </div>
    );
  };
  */
  export const ShowProfile: React.FunctionComponent<Profile> = (  
    prop:Profile) => {
    return (
        <div id="profile-results">
          {prop.userName && <p className="userName">UserName: {prop.userName}</p>}
          {prop.name && <p className="name">Name: {prop.name}</p>}
          {prop.company && <p className="company">Company: {prop.company}</p>}        
          {prop.avatar_url && <img style={{width:50, height:50}} src={prop.avatar_url} />}
        </div>
    );
  };