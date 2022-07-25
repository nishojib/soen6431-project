import React from 'react';

import Spinner from '../Spinner';

export default {
  title: 'Layout/Spinner',
  component: Spinner,
  argTypes: {
  },
};

const Template = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
