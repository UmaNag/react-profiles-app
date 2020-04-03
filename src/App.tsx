import React, { useState, useEffect } from 'react';
import { ShowProfile } from './components/ShowProfile';
import './App.css';
import { ProfileForm } from './components/ProfileForm';
import { ShowProfiles } from './components/ProfileList';
import { getProfileData } from './api/ApiService';
import { Profile } from './model/Profile'

export const App: React.FunctionComponent = () => {

  // empty Profiles array
  const profilesData:Profile[] = [{userName:'', avatar_url:'', name:'', company:''}]

  const initialProfileState:Profile= {userName:'', avatar_url:'', name:'', company:''}
/*
  const [res, setResult] = useState({
    userName:'',
    avatar_url:'',
    name:'',
    company:''    
  });
*/

// setProfile assigns a profile to res object
const [res, setProfile] = useState<Profile>(initialProfileState);

const[profiles, setProfiles] = useState<Profile[]>(profilesData)

// assigns the input value from ProfileForm to userName
const [params, setParams] = useState({
    userName:'',
  });

const[username, setUserName] = useState('');

// takes a profile as a paramater and adds to the profiles array
const addProfile = (profile:Profile) => {
  setProfiles([...profiles, profile]);
}
  
  useEffect(
    () => {
      const fetchData = async () => {
        const res = await getProfileData(params.userName);
        if (res !== undefined) {
          setProfile({
            userName: res.login,
            avatar_url:res.avatar_url,
            name: res.name,
            company:res.company           
          });
        }

        addProfile(res)
      };
      if (params.userName !== '') {
        fetchData();
      }
    }, 
    [params]
    
  );

  const setValues = (e: React.FormEvent<HTMLFormElement>) => {
      setParams({       
        userName:username    
       //userName: e.target[0].value        
      });
      e.preventDefault();
    };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {  
    setUserName((e.target as HTMLInputElement).value)
  }
  
  return (
    <div id="main-container">
      <h1>Simple React Github Profiles App</h1>
      <ProfileForm setValues={setValues} handleChange={handleChange} />       
     {/*} <ShowProfile {...res} />     */}
     <ShowProfiles {...profiles} /> 
    </div>
  );
};
