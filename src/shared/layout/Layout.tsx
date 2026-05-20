import Footer from './Footer'
import Header from './Header'
import type{LayoutProps} from '../types.ts'



const Layout = ({children} : LayoutProps) =>{
    return (
        <>
            <Header/>
            <main className="container mx-auto min-h-[95vh] pt-36">{children}</main>
            <Footer/>

        </>
    )
}

export default Layout;