import Signup from "./pages/public/Signup";
import Login from "./pages/public/Login";
import Home from "./pages/public/Home";

import Client from "./pages/protected/Client";

// Client pages/outlet
import GeneralChannel from "./pages/protected/GeneralChannel";
import NewMessage from "./pages/protected/NewMessage";
import Activities from "./pages/protected/Activities";
import Slackbot from "./pages/protected/Slackbot";
import Threads from "./pages/protected/Threads";
import Channel from "./pages/protected/Channel";

import ChannelNotFound from "./pages/error/ChannelNotFound";
import PageNotFound from "./pages/error/PageNotFound";

import {useRoutes} from "react-router-dom";

const App = () => useRoutes([
  { path: "/", element: <Home/> },
  { path: "login", element: <Login/> },
  { path: "signup", element: <Signup/> },
  { path: "*", element: <PageNotFound/> },
  { 
    path: "client", 
    element: <Client/>, 
    children: [ 
      { path: "", element: <Slackbot/> },
      { path: "threads", element: <Threads/> },
      { path: "activity", element: <Activities/> },
      { path: "new_message", element: <NewMessage/> },
      { path: "channel/:id", element: <Channel/> },
      // { path: "user/:id", element: <DirectMessage/> },
      { path: "channel/general", element: <GeneralChannel/> },
      { path: "*", element: <ChannelNotFound/> },
    ]
  },
])

export default App;
