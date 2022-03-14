import Image from 'next/image'
import Link from 'next/link'
import {Spring, animated} from '@react-spring/web'

export default function WelcomePage() {
    return (
        <section className='welcome-page'>
            <main className='main-text'>
                <Spring
                from={{marginTop:'-500px'}}
                to={{marginTop:'0px'}}
                config={{duration:1000}}
                >
                    {props =>(
                        <animated.div style={props}>
                            <div className='logo'>
                               <Image priority quality={100} src='/logo.png' alt='amos wings logo' width='250' height='250'/>
                            </div>
                        </animated.div>
                    )}
                </Spring>
                <Spring 
                from={{opacity:0}}
                to={{opacity:1}}
                delay={1000}
                config={{duration:1000}}
                >
                    {props => (
                        <animated.div style={props}>
                            <h1><span className='name'>AMOS MAKUPE</span><br/><span className='title'>- WEB DEVELOPER</span></h1>
                        </animated.div>
                    )}
                </Spring>
                <Spring
                from={{marginTop:'500px',opacity:0}}
                to={{marginTop:'10px', opacity:1}}
                delay={3000}
                config={{duration:1000}}
                >
                    {props=> (
                        <animated.div style={props}>
                            <button><Link href='/contact'><a className='link'>CONTACT ME</a></Link></button>
                        </animated.div>
                    )}
                </Spring>
            </main>
        </section>
    )
}
