import Image from 'next/image'
import Link from 'next/link'
import {Spring, animated} from '@react-spring/web'

export default function WelcomePage() {
    return (
        <section className='welcome-page'>
            <main className='main-text'>
                <div className='logo'>
                    <Image priority quality={100} src='/logo.png' alt='amos wings logo' width='250' height='250'/>
                </div>
                <h1><span className='name'>AMOS MAKUPE</span><br/><span className='title'>- WEB DEVELOPER</span></h1>
                <button><Link href='/contact'><a className='link'>CONTACT ME</a></Link></button>
            </main>
        </section>
    )
}
