import {HomePage} from './HomePage';
import React from 'react';
import { shallow, render } from 'enzyme';
import ContactsList from "../components/contactsList/contactsList"

describe('<HomePage />', () => {
  let appWrapper;
  let appInstance; 

  const app = (disableLifecycleMethods = true) =>
    shallow(<HomePage />, { disableLifecycleMethods });

    beforeEach(() => {
      appWrapper = app();
      appInstance = appWrapper.instance();
    });
  
    afterEach(() => {
      appWrapper = undefined;
      appInstance = undefined;
    });

    it('renders <ContactsList />', () => {
      expect(appWrapper.find(ContactsList).length).toBe(1);
    });
  
    describe('the rendered <ContactsList />', () => {
      const contactsList = () => appWrapper.find(ContactsList);
      // console.log(contactsList);
  
      it('receives state.marketCap as a "cap" prop', () => {
        expect(contactsList().prop('contacts')).toEqual(appWrapper.prop('contacts'));
      });
    });
});