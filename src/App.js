import './App.css';

import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }


  render() {
    if (!this.props.initialized) return <Preloader />;
    return (<div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/" excerpt element={<ProfileContainer />} />
          <Route path="profile">
            <Route path=":profileId" element={<ProfileContainer />} />
            <Route index element={<ProfileContainer />} />
          </Route>

          <Route path="dialogs/*" element={<DialogsContainer />} />

          <Route path="news" element={<News />} />
          <Route path="music" element={<Music />} />

          <Route path="users" element={<UsersContainer />} />

          <Route path="settings" element={<Settings />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </div>);
  }

}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);