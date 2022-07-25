import React from 'react';

import ProfileTop from '../ProfileTop';

export default {
  title: 'profile/ProfileTop',
  component: ProfileTop,
  argTypes: {
  },
};

const Template = (args) => <ProfileTop {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    profile: {
        status:'status',
        company:'company',
        location:'location',
        website:'website',
        social:'social',
        user: { name:'name', avatar:'avatar' }
      }
};
