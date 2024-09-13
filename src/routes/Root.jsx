import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

export default function Root() {
    return (
        <div>
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            <Navbar />
            <Outlet />
        </div>
    )
}