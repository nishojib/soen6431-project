import React from 'react';

import ProfileExperience from '../ProfileExperience';

export default {
  title: 'Layout/ProfileExperience',
  component: ProfileExperience,
  argTypes: {
  },
};

const Template = (args) => <ProfileExperience {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    experience: { 
        company: 'company', 
        title: 'title', 
        location: 'location', 
        current: 'current', 
        to:'2015-03-25',  
        from:'2015-03-25',
        description: 'description' 
    }
};
