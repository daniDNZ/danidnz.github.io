import Bio from "../components/Bio";
import Headline from "../components/Headline";

export default function Home() {

    return(
        <>
            <div className="container y mandatory-scroll-snapping">
                <Headline />
                <Bio />
            </div>
        </>
    )
}