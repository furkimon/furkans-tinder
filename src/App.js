import React from 'react';
import './Assets/App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Chats from './Components/Chats';
import ChatScreen from './Components/ChatScreen';
import TinderCards from './Components/TinderCards';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>

        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">  {/* put your default at the bottom */}
            <Header />
            <TinderCards />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
