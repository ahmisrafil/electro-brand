import AosConfig from "./AOS/Aos.config";


const Founders = () => {
    return (
        <div className="mx-0" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div className="my-10" style={{ backgroundImage: 'url(https://i.ibb.co/S5qcc8x/Untitled-design.png)' }}>
                <div className="hero-overlay bg-opacity-60 pb-20">
                    <div className="py-10 text-center text-neutral-content">
                        {/* headings and texts */}
                        <div className="mx-0" data-aos="flip-up">
                            <div className="md:mx-40 mt-10">
                                <h3 className="mb-5 text-2xl lg:text-5xl text-white font-bold">Meet the Founders</h3>
                                <p className="mb-5">We are here to pull everything "all aboard" for you. We will guide you through every step of the planning process. We will find you vendors, venues, and walk you through every detail of your event.</p>
                            </div>
                        </div>
                    </div>
                    {/* team members section */}
                    <div className="flex justify-center flex-col lg:flex-row gap-20 mr-0 mx-5">
                        {/* first member */}
                        <div className="mx-0" data-aos="flip-down">
                            <div className="text-center">
                                <img className="mx-auto" src="https://i.ibb.co/X5HcN8G/member1.png" alt="" />
                                <div className="text-white my-3">
                                    <h3 className="font-bold">Henry Rodriguez</h3>
                                    <p>Founder/CEO</p>
                                </div>

                            </div>
                        </div>


                        {/* second member */}
                        <div className="mx-0" data-aos="flip-down">
                            <div className="text-center">
                                <img className="mx-auto" src="https://i.ibb.co/fpfFs3F/member3.png" alt="" />
                                <div className="text-white my-3">
                                    <h3 className="font-bold">Mark Leighton</h3>
                                    <p>Co-Founder</p>
                                </div>
                            </div>
                        </div>


                        {/* Third member */}
                        <div className="mx-0" data-aos="flip-down">
                            <div className="text-center">
                                <img className="mx-auto" src="https://i.ibb.co/kD6x23b/member4.png" alt="" />
                                <div className="text-white my-3">
                                    <h3 className="font-bold">Maria Scalice</h3>
                                    <p>CMO</p>
                                </div>

                            </div>
                        </div>
                        {/* fourth member */}
                        <div data-aos="flip-down">
                            <div className="text-center">
                                <img className="mx-auto" src="https://i.ibb.co/mcKW0T2/member2.png" alt="" />
                                <div className="text-white my-3">
                                    <h3 className="font-bold">A. Safia Chowdhury</h3>
                                    <p>Sr. Executive</p>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};
AosConfig();
export default Founders;