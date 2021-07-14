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
                    <p>
                        These are skills that I can say I'm very fluent and good at. As you might notice I'm pretty much into Javascript ecosystem and I really love Javascript
                        <br/>
                        <br/>
                        Even though I'm in love with Javascript I'm always learning and in the future I will add more skills to my belt.
                    </p>
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
                <div className='grid-child-1'>
                    <Image  alt='technology langaugge' width='150' height='150' src='/skills/mysql-logo.png'/>
                    <p>MYSQL</p>
                </div>
                <div className='grid-child-2'>
                    <Image  alt='techonlogy langauage' width='150' height='150' src='/skills/mongodb-logo.png'/>
                    <p>MONGODB</p>
                </div>
            </main>
        </section>
    )
}
