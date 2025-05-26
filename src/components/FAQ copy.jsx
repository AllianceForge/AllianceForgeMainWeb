
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";


const FAQ = () =>{
    return <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
            <div className="text-center">
                <h2 className="text-3xl sm:text4xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                   F
                    <span className="bg-gradient-to-r from-neutral-100 to-blue-500 text-transparent bg-clip-text">
                        AQ
                    </span>
                </h2>
            </div>
                    {/* Videos Below Columns */}
        <div className="flex mt-10 justify-center md:flex-row">
            <video autoPlay loop muted className="rounded-lg w-[50%] border border-orange-700 shadow-orange-400 mx-auto my-4">
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <video autoPlay loop muted className="rounded-lg w-[50%] border border-orange-700 shadow-orange-400 mx-auto my-4 object-cover">
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        </div>
};

export default FAQCopy;