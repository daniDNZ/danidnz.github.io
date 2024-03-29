import { HiOutlineArrowNarrowUp } from "react-icons/hi";
export default function Headline() {


    return (
        <>
            <div id="headline" className="headline">
                <h1 className="h1 headline__h1 headline__h1--top">Dani Sanz</h1>
                <span className="line"></span>
                <h1 className="h1 headline__h1 headline__h1--bottom">Fullstack Developer</h1>
                <span className="swipe-up"><HiOutlineArrowNarrowUp />Swipe Up </span>
            </div>

        </>
    )
}