# React Slack Clone

[Avion School](https://www.avionschool.com/) front-end messaging web application group project.

## Project Structure

```
components
├── client
│   ├── AuthPage.tsx
│   └── thread.tsx
└── home
│   ├── footer
│   │   ├── Footer.tsx
│   │   └── FooterMenu.tsx
│   ├── FeatureSection.tsx
│   ├── Header.tsx
│   └── HeroSection.tsx
contexts
├── AuthProvider.jsx
├── ChannelsProvider.jsx
├── MessagesProvider.jsx
├── SocketProvider.jsx
└── UsersProvider.jsx
pages
├── client
│   ├── channels
│   │   ├── index.tsx
│   │   └── [channelid].tsx
│   ├── users
│   │   ├── index.tsx
│   │   └── [userid].tsx
│   ├── index.tsx
│   ├── activity.tsx
│   ├── new.tsx
│   └── thread.tsx
├── _app.tsx
├── index.jsx
├── login.jsx
└── register.jsx
├── public
├── styles
│   ├── global.css
│   ├── Home.module.css
│   └── Auth.module.css
└── utils
    ├── axios.jsx
    ├── constants.jsx
    └── helpers.jsx
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

## Technologies

- Yarn v1.22.17
- Next.js v12.1.4
- React v18
- Eslint v8.12

## Color schemes

- background: #19191b
- font-color: #f5f5f5
- red: #e01e5a
- green: #2eb67d
- blue: #36c5f0
- yellow: #ecb22e
