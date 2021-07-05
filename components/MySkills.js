import htmlLogo from '../public/skills/html-logo.png'
import Image from 'next/image'

export default function MySkills() {
    return (
        <section className='my-skills-page'>
            <h1>MY SKILLS THAT I’M FLUENT IN</h1>
            <main className='technologies'>
                <div>
                    <Image  alt='techonlogy langauage' width='150' height='150' src='/skills/html-logo.png'/>
                    <p>HTML</p>
                </div>
                <div>
                    <Image  alt='techonlogy langauage' width='150' height='150' src='/skills/css-logo.png'/>
                    <p>CSS</p>
                </div>
                <div className='comment'>
                    
                </div>
                <div>
                    <Image  alt='techonlogy langauage' width='150' height='150' src='/skills/javascript-logo.png'/>
                    <p>JAVASCRIPT</p>
                </div>
                <div>
                    <Image  alt='techonlogy langauage' width='150' height='150' src='/skills/react-logo.png'/>
                    <p>REACTJS</p>
                </div>
                <div>
                    <Image  alt='techonlogy langauage' width='150' height='150' src='/skills/nextjs-logo.png'/>
                    <p>NEXTJS</p>
                </div>
                <div>
                    <Image  alt='techonlogy langauage' width='150' height='150' src='/skills/nodejs-logo.png'/>
                    <p>NODEJS</p>
                </div>
                <div>
                    <Image  alt='technology langaugge' width='150' height='150' src='/skills/mysql-logo.png'/>
                    <p>MYSQL</p>
                </div>
                <div>
                    <Image  alt='techonlogy langauage' width='150' height='150' src='/skills/mongodb-logo.png'/>
                    <p>MONGODB</p>
                </div>
            </main>
        </section>
    )
}
