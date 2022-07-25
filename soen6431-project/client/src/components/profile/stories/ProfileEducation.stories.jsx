import React from "react";

import ProfileEducation from '../ProfileEducation';

export default {
  title: 'Example/ProfileEducation',
  component: ProfileEducation,
  argTypes: {
  },
};

const Template = (args) => <ProfileEducation {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    education: { 
        school:'school', 
        degree:'degree', 
        fieldofstudy:'fieldofstudy', 
        current:'current', 
        to:'2015-03-25',  
        from:'2015-03-25',
        description:'description' 
    }
};


