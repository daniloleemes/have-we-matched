import Header from './header'
import Navbar from './navbar'
import Content from './content'
import Footer from './footer'

function Layout({ children }) {
    return (
        <div className='bg-default'>
            <Navbar />
            <Header>
                <h1 className="text-white">Welcome!</h1>
                <p className="text-lead text-white">Use these awesome forms to login or create new account in your project for free.</p>
            </Header>
            <Content />
            <Footer />
        </div>
    )
}

export default Layout