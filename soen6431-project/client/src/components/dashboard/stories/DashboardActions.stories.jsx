import React from 'react';

import DashboardActions from '../DashboardActions';

export default {
  title: 'Example/DashboardActions',
  component: DashboardActions,
  argTypes: {
  },
};

const Template = (args) => <DashboardActions {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

