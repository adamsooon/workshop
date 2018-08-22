import React from 'react';
import { shallow, render } from 'enzyme';
import Contact from './contact';
import ContactsList from './contactsList';

const mockup = [
  {
    name: {
      first: 'adam',
      last: 'adam'
    },
    cell: '332323332',
    email: 'asas@op.pl',
    picture: {
        large: 'https://randomuser.me/api/portraits/men/62.jpg'
    }
  },
  {
    name: {
      first: 'john',
      last: 'jji'
    },
    cell: '332329332',
    email: 'john@op.pl',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/62.jpg'
    }
  }
];

it('renders without crashing', () => {
  shallow(<ContactsList contacts={[]} />);
});

it(`doesn't show message when there are contacts`, () => {
  const contactsList = shallow(<ContactsList contacts={mockup} />);
  expect(contactsList.text()).not.toContain('No results!')
});

it('includes contacts', () => {
  const contactsList = shallow(<ContactsList contacts={mockup} />);
  expect(contactsList.containsMatchingElement(<Contact contact={mockup[0]} />)).toEqual(true);
});

it(`shows a list of contacts`, () => {
  const contactsList = render(<ContactsList contacts={mockup} />);
  expect(contactsList.find('li').length).toEqual(mockup.length);
});