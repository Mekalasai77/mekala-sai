import star1 from "../images/star-1.svg"
import star2 from "../images/star-2.svg"
const Home = () => {
    return (
        <>
        <h1 className="heading">
            <span className="holder-svt">
                <span className="stars-right-svt">
                    <span className="heading1">
                        Hi. i'm Sái.
                        <span>
                            <figure className="figure">
                                <img className="img" src={star1} />
                            </figure>
                        </span>
                    </span>
                </span>
                <span className="holder-svt">
                    <span className="stars-left-svt">
                        <span className="heading1">
                            <figure className="figure2">
                                <img src={star2}/>
                            </figure>
                        </span>
                        <span className="heading1">A Designer.</span>
                    </span>
                </span>
            </span>
        </h1>
        <p className="desc">
        I'm passionate about crafting experiences that are engaging, accessible, and user-centric.
        </p>
        </>
    );
}

export default Home;