import React, { Fragment } from 'react';
import { Profile } from '../model/Profile'
import { ShowProfile } from './ShowProfile';

export const ShowProfiles: React.FunctionComponent<Profile[]> = (props:Profile[]) =>
{
  console.log(props);
    return (     
        <div id="profiles">
          {props.map(profile => <ShowProfile{...profile}/>)}
        </div>       
    );
}