export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  password2: string;
}

export interface CommentFormData {
  text: string;
}

export interface PostFormData {
  text: string;
}

export interface EducationFormData {
  school: string;
  degree: string;
  fieldofstudy: string;
  from: string;
  to: string;
  current: boolean;
  description: string;
}

export interface ExperienceFormData {
  company: string;
  title: string;
  location: string;
  from: string;
  to: string;
  current: boolean;
  description: string;
}

export interface ProfileFormData {
  company: string;
  website: string;
  location: string;
  status: string;
  skills: string;
  githubusername: string;
  bio: string;
  twitter: string;
  facebook: string;
  linkedin: string;
  youtube: string;
  instagram: string;
}

export interface AlertType {
  id: string;
  alertType: string;
  msg: string;
}

export interface CommentType {
  _id: string;
  text: string;
  name: string;
  avatar: string;
  user: string;
  date: string;
}

export interface PostType {
  _id: string;
  text: string;
  name: string;
  avatar: string;
  user: string;
  likes: string;
  comments: CommentType[];
  date: string;
}

export interface UserType {
  _id: string;
  name: string;
  avatar: string;
}
export interface ProfileType {
  _id: string;
  bio: string;
  skills: string[];
  user: UserType;
  experience: ExperienceType[];
  education: EducationType[];
  githubusername: string;
  status: string;
  company: string;
  location: string;
  website: string;
  social: { [key: string]: string };
}

export interface EducationType {
  _id: string;
  school: string;
  degree: string;
  fieldofstudy: string;
  current: boolean;
  to: string;
  from: string;
  description: string;
}

export interface ExperienceType {
  _id: string;
  company: string;
  title: string;
  location: string;
  current: boolean;
  to: string;
  from: string;
  description: string;
}

export interface GithubRepoType {
  id: string;
  html_url: string;
  name: string;
  description: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
}
