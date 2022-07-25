import React from 'react';

import ProfileAbout from '../ProfileAbout';

export default {
  title: 'Example/ProfileAbout',
  component: ProfileAbout,
  argTypes: {
  },
};

const Template = (args) => <ProfileAbout {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    profile: {
        bio: 'TestBio',
        skills: ['TestSkills'],
        user: { name: 'TestBio' }
      }
};


