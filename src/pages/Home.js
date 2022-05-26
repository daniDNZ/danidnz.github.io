import Bio from "../components/Bio";
import Contact from "../components/Contact";
import Headline from "../components/Headline";
import Works from "../components/Works";

export default function Home() {

    return (
        <>
            <Headline />
            <Works />
            <Bio />
            <Contact />
        </>        
    )
}