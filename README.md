# React Slack Clone

[Avion School](https://www.avionschool.com/) front-end messaging web application group project.

## Running the project

- Clone the project and then start the project.

  ```
  git clone https://github.com/dalewaltergh/slack-clone-react
  cd react-slack-clone

  # install dependencies
  npm i

  # serve with hot reload at localhost:3000
  npm run dev || vite dev

  # build for production with minification
  npm run build
  ```

## Project Structure

```
src
├── asssets
├── components
├── providers
│   ├── AuthProvider.jsx
│   ├── ChannelsProvider.jsx
│   ├── MessagesProvider.jsx
│   ├── SocketProvider.jsx
│   └── UsersProvider.jsx
├── routes
│   ├── client
│   │   ├── Activities.jsx
│   │   ├── Channel.jsx
│   │   ├── DirectMessage.jsx
│   │   ├── NewMessage.jsx
│   │   ├── Slackbot.jsx
│   │   └── Threads.jsx
│   ├── errors
│   │   ├── Forbidden403.jsx
│   │   ├── NotFound404.jsx
│   │   ├── ServerError.jsx
│   │   └── Unauthorized.jsx
│   ├── Client.jsx
│   ├── Login.jsx
│   └── Register.jsx
└── App.jsx
```

## User Stories

- User is able to create account with email and password
- User is able to login his/her credentials
- User is able to create new channel
- User is able to add users on a channel
- User is able to send message to other user (Direct Message)
- User is able to send message to a channel
- User is able to receive message from other user (Direct Message)
- User is able to receive message from his/her channels

## Dependencies

- axios
- react-icons
- react-query
- react-router-dom
- socket.io-client
- styled-components

## Color schemes

- background: #19191b
- font-color: #f5f5f5
- red: #e01e5a;
- green: #2eb67d;
- blue: #36c5f0;
- yellow: #ecb22e;
