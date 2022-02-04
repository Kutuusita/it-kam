import './App.css';


import { Routes, Route } from 'react-router-dom';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';

const  App = () => {
  return (
      <div className="app-wrapper">
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

            <Route path="news/" element={<News />} />
            <Route path="music/" element={<Music />} />

            <Route path="users/" element={<UsersContainer />} />

            <Route path="settings/" element={<Settings />} />
          </Routes>
        </div>
      </div>
  );
}


export default App;