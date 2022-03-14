import {MdHelpOutline} from 'react-icons/md'
import styled from 'styled-components'

import {SLACKBOT_IMG} from '@/constants/constants'
import ChatInput from '@/components/ChatInput'
import MyLink from '@/components/MyLink'

// Slackbot Component
export default() => (
  <Channel>
    <Header>
      <img src={SLACKBOT_IMG}/>
      <h4>Slackbot</h4>
    </Header>
    <Search>
      <button>+ Add a bookmark</button>
    </Search>
    <Thread>
      <WelcomeMessage>
        <h1>Hi, Slackbot here!</h1>
        <Slackbot>
          <img src={SLACKBOT_IMG}/>
          <Introduction>
            <p>You're here! Hello!</p>
            <p>
              To learn all about using Slack, click the&nbsp;
              <MdHelpOutline size={20}/>&nbsp;
              help icon in the top right corner of the app. (Or, you can visit the&nbsp;
              <MyLink to='https://slack.com/help' target='_blank'>Help Center</MyLink> on the web!)
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
          <img src={SLACKBOT_IMG}/>
        </UserAvatar>
        <MessageContent>
          <Name>
            Slackbot
            <Date>7:33 AM</Date>
          </Name>
          <p>👋 You're here! The day just got better. This is Slack,&nbsp;
            the messaging app for teams at work. Let's get you started.</p>
          <Line>| <button>Set Up Your Profile</button></Line>
        </MessageContent>
      </Message>
    </Thread>
    <div style={{marginTop: '0'}}>
      <ChatInput/>
    </div>
  </Channel>
)


// Styled Component 
const Channel = styled.div`
  display: flex;
  color: #d1d2d3;
  background: #1a1d21;
  flex-direction: column;
`

const Header = styled.div`
  gap: 10px;
  height: 50px;
  display: flex;
  padding-left: 20px;
  background: #1a1d21;
  padding-right: 20px;
  align-items: center;
  outline: 1px solid #35373b;

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
  background: #1a1d21;
  align-items: center;
  padding-right: 20px;
  outline: 1px solid #35373b;
  justify-content: space-between;

  button {
    border: none;
    color: #a0a0a2;
    cursor: pointer;
    font-size: 12px;
    padding: 5px 5px;
    background: none;
    :hover {
      border-radius: 4px;
      background: #232529;
    }
  }
`

const Thread = styled.div`
  height: 70%;
  overflow: auto;
`

const WelcomeMessage = styled.div`
  padding: 8px 20px;
`

const Slackbot = styled.div`
  display: grid;
  row-gap: 10px;
  padding-top: 10px;
  grid-template-columns: 3.5% auto;
  
  img {
    width: 45px;
    height: 45px;
    border-radius: 2px;
  }
`

const Introduction = styled.div`
  padding-left: 20px;
  padding-bottom: 20px;

  p { padding-bottom: 20px; }

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
  row-gap: 10px;
  display: grid;
  padding: 45px 20px;
  grid-template-columns: 3.5% auto;
  border-top: 1px solid #35373b;
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
  color: #616061;
  font-size: 13px;
  margin-left: 8px;
  font-weight: 400;
`
const Line = styled.span`
  display: flex;
  color: #535454;
  font-size: 40px;
  padding-top: 5px;
  align-items: center;

  button {
    color: #fff;
    width: 11%;
    padding: 5px;
    cursor: pointer;
    margin-left: 5px;
    border-radius: 4px;
    background: #128567;
  }
`
