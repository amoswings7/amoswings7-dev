import Link from 'next/link'

export default function MyServices() {
    return (
        <section className='my-services'>
             <h1>MY SERVICES</h1>
             <main>
                 <div>
                     as your business grows you need a professional and amazing website to     showcase your products or services<br/><br/>  
                     or you might be someone who wants to show your work or creativity to your friends or certain people/companies
                 </div>
                 <div>
                    You attract more people to your business and expand your brand to the world.
                    You let your customers know that you are serious about your business.
                    more people are aware of your work and what you do.
                 </div>
                 <div>
                 All what you need is someone who can create and deploy your amazing and unique website to the world. And that is why we are here to do just that.
                 </div>
             </main>
             <button><Link href='/contact'>Contact me</Link></button>
        </section>
    )
}
