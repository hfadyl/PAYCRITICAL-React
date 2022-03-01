import Navbar  from "../../layout/Navbar";
import Hero from "./sections/Hero";
import Feature1 from "./sections/Feature1";
import Feature2 from "./sections/Feature2";
import Feature3 from "./sections/Feature3";
import Paycritical from "./sections/Paycritical";
import Cases from "./sections/Cases";
import Partners from "./sections/Partners";
import Blog from "./sections/Blog";
import Footer from "../../layout/Footer";

function Home()
{
    return (
        <>
        <Navbar />
        <Hero />
        <Feature1 />
        <Feature2 />
        <Feature3 />
        <Paycritical />
        <Cases />
        <Partners />
        <Blog />
        <Footer />
        </>
    );
}

export default Home;