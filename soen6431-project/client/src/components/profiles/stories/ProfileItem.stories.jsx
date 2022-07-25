import React from 'react';

import ProfileItem from '../ProfileItem';

export default {
  title: 'profiles/ProfileItem',
  component: ProfileItem,
  argTypes: {
  },
};

const Template = (args) => <ProfileItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    profile: {
        user: { _id:'_id', name:'name', avatar:'avatar' },
        status:'status',
        company:'company',
        location:'location',
        skills:['skills']
      }
    };
