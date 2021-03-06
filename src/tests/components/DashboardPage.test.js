import React from 'react';
import { shallow } from 'enzyme';
// no idea why but had to install "css-loader" via yarn and then add:
// {
//   "snapshotSerializers": ["enzyme-to-json/serializer"],
//   "moduleNameMapper": {"^.+\\.css$":"css-loader"},
// }
// into the jest config file to get this to work. Found this answer in the Q&A. Seems to allow jest to read the css from date-picker
import DashboardPage from '../../components/DashboardPage';


test('should render the DashboardPage correctly', () => {
  const wrapper = shallow(<DashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
