import Head from "next/head";
import Box from '@chakra-ui/react'
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({children}) => (
    <>
        <Head>
            <title>Real Estate</title>
        </Head>
        <Box maxWidth="11280px" margin="auto">
           <header>
           <Navbar/>
           </header>
           <main>
            {children}
           </main>
           <footer>
           <Footer/>
           </footer>
        </Box>
    </>
);

export default Layout;