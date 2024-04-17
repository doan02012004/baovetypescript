import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <>
    
    <Header />
      
     <div className="container-fluid">
  <div className="row">
    <SideBar />
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      {/* List Product  */}
     <Outlet />
     
    </main>
  </div>
</div>

   </>
  )
}

export default Layout