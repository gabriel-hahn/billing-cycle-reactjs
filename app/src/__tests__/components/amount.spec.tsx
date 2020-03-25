import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Amount, { AmountPropsInterface } from '../../components/Amount';

const props: AmountPropsInterface = {
  value: 123.50,
  incoming: true,
};

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<Amount {...props} />).dive();
});

describe('Amount component', () => {
  describe('Smoke tests', () => {
    it('Should render the amount component correctly', () => {
      expect(wrapper.exists());
    });

    it('Should render 1 Icon', () => {
      expect(wrapper.find('Icon').length).toEqual(1);
    });

    it('Should render 1 Value', () => {
      expect(wrapper.find('Value').length).toEqual(1);
    });
  });
});
