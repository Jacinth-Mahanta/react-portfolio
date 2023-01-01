import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar'
import './index.scss'
const Layout = () =>{
    return ( 
        <div className='App'>
            <Sidebar/>
            <div className='page'>
                <span className='tags top-tags'>
                    &lt;
                    /body
                    &gt;
                </span>

                <Outlet/>

                <span className='tags botton-tags'>
                    &lt;
                    /body
                    &gt;
                    </span>
                <br/>
                <span className='bottom-tag-html'>
                    &lt;
                    /html
                    &gt;
                </span>
            </div>
        </div>
    )
}

export default Layout