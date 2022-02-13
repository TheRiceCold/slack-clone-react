import styled from 'styled-components'
import React from 'react'
import ChatInput from '../../components/ChatInput'
import {MdHelpOutline} from 'react-icons/md'

const icon = <img src="https://a.slack-edge.com/80588/marketing/img/avatars/slackbot/avatar-slackbot@2x.png" />

export default() => (
  <Channel>
    <Header>
      {icon}
      <h4>Slackbot</h4>
    </Header>
    <Search>
      <button>+ Add a bookmark</button>
    </Search>
    <Thread>
      <WelcomeMessage>
        <h1>Hi, Slackbot here!</h1>
        <Slackbot>
          <Icon>{icon}</Icon>
          <Introduction>
            <p>You're here! Hello!</p>
            <p>
              To learn all about using Slack, click the <MdHelpOutline size={20}/> help icon in the top right corner of the app.
              (Or, you can visit the <a href="https://slack.com/help">Help Center</a> on the web!)
            </p>
            <p>
              I, however, am not a human. Just a bot (a simple bot, with only a few tricks up my metaphorical sleeve).
              But I'm still happy you're here!
            </p>
          </Introduction>
        </Slackbot>
      </WelcomeMessage>
      <Message>
        <UserAvatar>
          {icon}
        </UserAvatar>
        <MessageContent>
          <Name>
            Slackbot
            <Date>7:33 AM</Date>
          </Name>
          <p>👋 You're here! The day just got better. This is Slack, the messaging app for teams at work. Let's get you started.</p>
          <Line>| <button>Set Up Your Profile</button></Line>
        </MessageContent>
      </Message>
    </Thread>
    <div style={{marginTop: '0'}}>
      <ChatInput/>
    </div>
  </Channel>
)

const Channel = styled.div`
  display: flex;
  color: #D1D2D3;
  background: #1a1d21;
  flex-direction: column;
`

const Header = styled.div`
  height: 50px;
  display: flex;
  padding-left: 20px;
  background: #1A1D21;
  padding-right: 20px;
  align-items: center;
  outline: 1px solid #35373B;
  gap: 10px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 2px;
  }
`

const Search = styled.div`
  height: 37px;
  display: flex;
  padding-left: 20px;
  background: #1A1D21;
  padding-right: 20px;
  align-items: center;
  outline: 1px solid #35373B;
  justify-content: space-between;

  button {
    border: none;
    color: #A0A0A2;
    font-size: 12px;
    cursor: pointer;
    padding: 5px 5px;
    background: none;
    :hover {
      background-color: #232529;
      border-radius: 4px;
    }
  }
`

const Thread = styled.div`
  height: 70%;
  overflow: auto;
`

///thread
const WelcomeMessage = styled.div`
  padding: 8px 20px;
`

const Slackbot = styled.div`
  display: grid;
  grid-template-columns: 3.5% auto;
  row-gap: 10px;
  padding-top: 10px;
  
  img {
    width: 45px;
    height: 45px;
    border-radius: 2px;
  }
`

const Icon = styled.div`
  
`

const Introduction = styled.div`
  padding-left: 20px;
  padding-bottom: 20px;

  p {
    padding-bottom: 20px;
  }

  a {
    color: #1d96ca;
    text-decoration: none;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`

const Message = styled.div`
  display: grid;
  padding: 45px 20px;
  grid-template-columns: 3.5% auto;
  row-gap: 10px;
  border-top: 1px solid #35373B;
`

const UserAvatar = styled.div`
  width: 36px; 
  height: 36px;
  overflow: hidden;
  margin-right: 8px;
  border-radius: 2px;
  img { width: 100%; }
`

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.span`
  font-size: 15px;
  font-weight: 700;
  line-height: 1.4;
  margin-right: 8px;
`

const Date = styled.span`
  font-size: 13px;
  margin-left: 8px;
  font-weight: 400;
  color: rgb(97, 96, 97);
`
const Line = styled.span`
  display: flex;
  align-items: center;
  padding-top: 5px;
  color: #535454;
  font-size: 40px;

  button {
    color: white;
    background-color: #128567;
    border-radius: 4px;
    padding: 5px;
    width: 11%;
    margin-left: 5px;
    cursor: pointer;
  }
`
