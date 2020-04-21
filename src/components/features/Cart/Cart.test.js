import React from 'react';
import { shallow } from 'enzyme';
import { CartComponent } from './Cart';

const mockProps = {
  products: [{ _id: '1', photos: ['a'], amount: 1, name: 'a' }],
};

describe('Component Cart', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
