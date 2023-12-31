import React, { useEffect } from 'react'
import Topbar from '../components/common/topbar';
import Menubar from '../components/common/menubar';
import Footer from '../components/common/footer';
import {Outlet, useLocation} from "react-router-dom";

const UserLayout = () => {
  /* bu bir singlepatch app. yani sayfalar arası geçiş yaptığımızda mouse ibresi her zaman üste çıkmaz. nerdeysek ordan devam eder. şimdi bunu halledicez. */
  const {pathname} = useLocation();/* şuanki location konumuuzu aldık ve bunu pathname içine attık. */

  useEffect(()=>{/* useEffect ilk açılışta çalışacak, pathname değişkeni değiştiği anda burdaki kodlar çalışacak. */
  window.document.documentElement.scrollTo({top:0});
  },[pathname])
  return (
    <>
    <Topbar />
    <Menubar />
    <Outlet />
    <Footer />

    </>
  )
}

export default UserLayout;