import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar({name}) {


    const [close,setClose] = useState('none');

    function closeHandler(style){
        setClose(style)
    }


    return (
        <nav className={name.className}>
            <Image src='/logo.png' width='50' height='50' rel='noreferrer' alt='amos wings logo'/>
            <ul className='mobile-list'style={{display:close}}>
                <li className='close' onClick={()=> closeHandler('none')}>X</li>
                <li className='links'>
                   <Link href='/'><a onClick={()=> closeHandler('none')} className='link'>HOME</a></Link>
                   <Link href='/contact'><a onClick={()=> closeHandler('none')} className='link'>CONTACT ME</a></Link>
                   <a className='link' href='https://github.com/amoswings7' target='_blank' rel="noreferrer">GITHUB</a>
                </li>
            </ul>
            <ul className='desktop-list'>
                <li> <Link href='/'><a className='link'>HOME</a></Link></li>
                <li><Link href='/contact'><a className='link'>CONTACT ME</a></Link></li>
                <li><a className='link' href='https://github.com/amoswings7' target='_blank' rel="noreferrer">GITHUB</a></li>
            </ul>
            <div className='menu-burger' onClick={()=> closeHandler('flex')}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}
