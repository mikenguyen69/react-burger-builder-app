import React from 'react';
import { mount, shallow } from '../../enzyme';

import List from '../../components/List/List';

describe('List tests', () => {

  it('renders list-items', () => {
    const items = ['one', 'two', 'three'];

    // Replace shallow iwth mount
    const wrapper = mount(<List items={items} />);

    // Let's check what wrong in our instance
    console.log(wrapper.debug());

    // Expect the wrapper object to be defined
    expect(wrapper.find('.list-items')).toBeDefined();
    expect(wrapper.find('.item')).toHaveLength(items.length);
  });
});

//https://scotch.io/tutorials/testing-react-components-with-enzyme-and-jest