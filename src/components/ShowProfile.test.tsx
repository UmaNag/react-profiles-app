import React from 'react';
import { mount } from 'enzyme';
import { ShowProfile } from './ShowProfile';

describe('ShowProfile Tests', () => {
  test('Should render profile info', () => {
    const profileInfo = {
      userName: 'tj',
      name: 'TJ Holowaychuk',
      company: 'Apex',
      avatar_url: 'https://avatars2.githubusercontent.com/u/25254?v=4'      
    };
    const component = mount(<ShowProfile {...profileInfo} />);
    const username = component.find('.userName');
    const name = component.find('.name');
    const company = component.find('.company');
   // const avatarurl = component.find('.avatar_url');
    
    expect(username.text()).toBe('UserName: tj');
    expect(name.text()).toBe('Name: TJ Holowaychuk');
    expect(company.text()).toBe('Company: Apex');
   
  });
});