import styles from "@/styles/client/Client.module.sass";

import {Outlet, useLocation} from "react-router-dom";
import {useAuth} from "@/contexts/AuthContext";
import {FC} from "react";

import Sidebar from "@/layouts/client/sidebar/Sidebar";
import Navbar from "@/layouts/client/navbar/Navbar";

import ChannelsProvider from "@/contexts/ChannelsContext";
import MessagesProvider from "@/contexts/MessagesContext";
import UsersProvider from "@/contexts/UsersContext";

const Client: FC = () => {
  // const {auth} = useAuth();
  const location = useLocation();
  
  return (
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
    </main> 
  );
};

export default Client;
