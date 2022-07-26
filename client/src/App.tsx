import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login, Register } from './components';
import Dashboard from './components/dashboard/Dashboard';
import Alert from './components/layout/Alert';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import NotFound from './components/layout/NotFound';
import Post from './components/post/Post';
import Posts from './components/posts/Posts';
import AddEducation from './components/profile-forms/AddEducation';
import AddExperience from './components/profile-forms/AddExperience';
import ProfileForm from './components/profile-forms/ProfileForm';
import Profile from './components/profile/Profile';
import Profiles from './components/profiles/Profiles';
import PrivateRoute from './components/routing/PrivateRoute';
import { LOGOUT } from './redux/actions/types';

// Redux
import { Provider } from 'react-redux';
import { loadUser } from './redux/actions/auth';
import store from './redux/store';
import setAuthToken from './utils/setAuthToken';

import './App.css';

const App = () => {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="profiles" element={<Profiles />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route
            path="dashboard"
            element={<PrivateRoute component={Dashboard} />}
          />
          <Route
            path="create-profile"
            element={<PrivateRoute component={ProfileForm} />}
          />
          <Route
            path="edit-profile"
            element={<PrivateRoute component={ProfileForm} />}
          />
          <Route
            path="add-experience"
            element={<PrivateRoute component={AddExperience} />}
          />
          <Route
            path="add-education"
            element={<PrivateRoute component={AddEducation} />}
          />
          <Route path="posts" element={<PrivateRoute component={Posts} />} />
          <Route path="posts/:id" element={<PrivateRoute component={Post} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
