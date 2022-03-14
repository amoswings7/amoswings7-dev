//import htmlLogo from '../public/skills/html-logo.png'
import Image from 'next/image'
import { skillsObject } from '../information/object'
import { Spring, animated} from '@react-spring/web'
import  {useEffect, useRef, useState} from 'react'

export default function MySkills() {

    const [scrollPosition, setScrollPosition] = useState(null);
    const ele = useRef()

    const scrollHandler = ()=>{
        if(window.scrollY-ele.current.getBoundingClientRect().top >=0){
            console.log((window.scrollY-ele.current.getBoundingClientRect().top))
            setScrollPosition(true)
            window.removeEventListener('scroll',scrollHandler)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',scrollHandler)
    },[])
    

    return (
        <section ref={ele} className='my-skills-page'>
            <h1>MY SKILLS THAT I’M FLUENT IN {scrollPosition}</h1>
            {scrollPosition && <main className='technologies'>
                {skillsObject.map(skill => (
                    <div key={(Math.random()*10000)*(Math.random()*10000)}>
                        <Image priority alt={skill.alt} width={150} height={150} src={skill.src}/>
                        <p>{skill.name}</p>
                    </div>
                ))}
            </main>}
        </section>
    )
}
