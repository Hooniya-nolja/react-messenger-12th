import React, { useState } from 'react';
import styled from 'styled-components';

import ChattingScreen from './components/ChattingScreen';
import Sidebar from './components/Sidebar'
import ChattingRoomList from './components/ChattingRoomList';
import FriendList from './routes/FriendList';
import StartingPage from './components/StartingPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  const [getLink, setGetLink] = useState('');
  const getNewPage = (e) => {
    setGetLink('');
  };

  return (
    <Container>
      {/* <AppScreen> */}
      <Router>
        <Sidebar {... { getNewPage }}>
          {/* <LinkIcon to="/friend-list">
            <i class="fas fa-user"></i>
          </LinkIcon>
          <LinkIcon to="/chatting-room-list">
            <i class="fas fa-comment-dots"></i>
          </LinkIcon>
          <LinkIcon to="/friend-list">
            <i class="fas fa-user-plus"></i>
          </LinkIcon>
          <LinkIcon to="/friend-list">
            <i class="fad fa-clock"></i>
          </LinkIcon>
          <ServeIcon className="serve-icon">
            <i class="far fa-video-plus"></i>
            <i class="far fa-square"></i>
            <i class="far fa-bookmark"></i>
            <i class="far fa-volume-down"></i>
            <i class="fas fa-ellipsis-h"></i>
          </ServeIcon> */}
        </Sidebar>

        <ChattingRoomListContainer>
          <AppController />
          <Switch>
            <Route path="/friend-list" component={FriendList} />
            <Route path="/chatting-room-list" component={ChattingRoomList} />
            <Route path="/chatting-screen" component={ChattingRoomList} />
            <Route path="/friend-list/chatting-screen" component={FriendList} />
            <Route exact path="/" component={ChattingRoomList} />
          </Switch>
        </ChattingRoomListContainer>
        <ChattingScreenContainer>
          <Switch>
            <Route exact path="/friend-list" component={StartingPage} />
            <Route path="/chatting-room-list" component={StartingPage} />
            <Route path="/chatting-screen" component={ChattingScreen} />
            <Route path="/friend-list/chatting-screen" component={ChattingScreen} />
            <Route exact path="/" component={StartingPage} />
          </Switch>
        </ChattingScreenContainer>
      </Router>
      {/* </AppScreen> */}
    </Container>

    // <Wrapper>
    //   <ChattingScreen></ChattingScreen>
    // </Wrapper>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  background: #fafafa;
`;
const AppScreen = styled.div`
  height: 100%;
  width: 30%;
  background: #fafafa;
  display: flex;
`;

// const Sidebar = styled.div`
//   ${'' /* width: 7%; */}
//   width: 90px;
//   height: 100%;
//   background: #002171;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

const ServeIcon = styled.div`
  ${'' /* height: 30%; */}
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const AppController = styled.div`
  width: 100%;
  height: 5%;
  background: #fafafa;
`;
const MainScreen = styled.div`
  height: 95%;
  width: 100%;
  display: flex;
`;
const ChattingRoomListContainer = styled.div`
  height: 100%;
  width: 450px;
  flex-direction: column;
`;

const ChattingScreenContainer = styled.div`
  height: 100%
  width: 50%;
`;

const LinkIcon = styled(Link)`
  margin: 35px 0 0 0;
`;

const Wrapper = styled.div`
  height: 100vh;
  & * {
    font-family: sans-serif;
  }
  background: #abc1d1;
`;
