import Navbar from "../components/Navbar"

export default function contact() {
    return (
        <div className='contact-page'>
            <Navbar name={{className:'navbar blue-bg'}}/>
            <form action="https://formspree.io/f/xgerznjq"method='POST' className='form'>
                <label htmlFor="name">
                    <p>name</p>
                    <input type="text"required maxLength='15' name='name' />
                </label>
                <label htmlFor="email">
                    <p>email</p>
                    <input type="email" required  name='email' />
                </label>
                <label htmlFor="comment">
                    <p>comment</p>
                    <textarea name="comment" id="comment"></textarea>
                </label>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}
