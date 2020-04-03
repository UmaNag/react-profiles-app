import React from 'react';

interface ISetValues {
  setValues(e: React.FormEvent<HTMLFormElement>): void;
  handleChange(e: React.FormEvent<HTMLInputElement>): void;
}

export const ProfileForm: React.FunctionComponent<ISetValues> = ({setValues, handleChange}) => {
  return (
    <form onSubmit={setValues}>
      <input type="text" name="userName" id="userName" onChange={handleChange} placeholder="Github user name..." />
     
      <button>Get Github Profile</button>
    </form> 
  );
};