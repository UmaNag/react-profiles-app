import React from 'react';
import { shallow } from 'enzyme';
import { ProfileForm } from './ProfileForm';

describe('ProfileForm Tests', () => {
  test('Should render the form', () => {
    const fnSubmit = jest.fn;
    const component = shallow(<ProfileForm setValues={fnSubmit} />);
  
    expect(component.exists()).toBe(true);
  });
  
  test('Should have city and country input fields and a button', () => {
    const fnSubmit = jest.fn;
    const component = shallow(<ProfileForm setValues={fnSubmit} />);
    const userNameInput = component.find('#userName');   
    const btn = component.find('button');
  
    expect(userNameInput.exists());
    
    expect(btn.exists());
  });
});