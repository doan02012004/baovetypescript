import React from 'react'

const SideBar = () => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div className="position-sticky pt-3">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            <span data-feather="home" />
            Products
          </a>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default SideBar