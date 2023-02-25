import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Dashboard() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-info">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white fs-3" href="#">Navbar</Link>

                </div>
            </nav>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-2 bg-white" style={{ height:"100vh"  }}>
                        <ul className='list-group'>
                            <li className='list-group-item my-2 bg-info '>
                                <Link className='text-white' to={'../dashboard'}>Profile</Link>
                            </li>

                            <li className='list-group-item my-2 bg-info '>
                                <Link className='text-white' to={'about'}>About</Link>
                            </li>
                            <li className='list-group-item my-2 bg-info '>
                                <Link className='text-white' to={'contact'}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-10">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    )
}
