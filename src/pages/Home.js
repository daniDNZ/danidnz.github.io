import Bio from "../components/Bio";
import Contact from "../components/Contact";
import Works from "../components/Works";
import { ReactComponent as Box } from "../img/svg/box.svg";

export default function Home() {

    return (
        <>
            <Box />
            <Works />
            <Bio />
            <Contact />
        </>        
    )
}