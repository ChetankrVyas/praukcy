import Logo from '../assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
function Nav_bar() {
    let router = useRouter();
    let location = router.pathname;
    return (
        <nav>
            <div className="leftnav"><Image src={Logo} alt="logo" className='logoimg' /></div>
            <div className="rightnav">
                <ul>
                    <li className={location === "/" ? "nav-item ulstyle active" : "nav-item ulstyle"}><Link href='/'>Home</Link></li>
                    <li className={location === "/page/services" ? "nav-item ulstyle active" : "nav-item ulstyle"}><Link href='/page/services'>Services</Link></li>
                    <li className={location === "/page/portfolio" ? "nav-item ulstyle active" : "nav-item ulstyle"}><Link href='/page/portfolio'>Portfolio</Link></li>
                    <li className={location === "/page/about" ? "nav-item ulstyle active" : "nav-item ulstyle"}><Link href='/page/about'>About</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav_bar;