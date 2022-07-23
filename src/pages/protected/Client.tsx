import styles from "@/styles/client/Client.module.sass";

import {
  useLocation, 
  Navigate,
  Outlet, 
} from "react-router-dom";
import {FC} from "react";

import Sidebar from "@/layouts/client/sidebar/Sidebar";
import Navbar from "@/layouts/client/navbar/Navbar";

import ChannelsProvider from "@/contexts/ChannelsContext";
import MessagesProvider from "@/contexts/MessagesContext";
import UsersProvider from "@/contexts/UsersContext";
import {useAuth} from "@/contexts/AuthContext";

const Client: FC = () => {
  const {isAuth} = useAuth();
  const location = useLocation();
  
  return (isAuth ?
    <main className={styles.client_page}>
      <Navbar/>
      <ChannelsProvider>
        <MessagesProvider>
          <UsersProvider>
            <section className={styles.client_container}>
              <Sidebar/>
              <Outlet/>
            </section>
          </UsersProvider>
        </MessagesProvider>
      </ChannelsProvider>
    </main> :
      <Navigate to="/" />
  );
};

export default Client;
