

const ContactUs = () => {
    return (
        <div className="my-20 text-center bg-gradient-to-r from-[#212b9b] to-[#790be7]">
            <h3 className="text-4xl font-semibold my-10 text-center text-white pt-10">GET IN TOUCH </h3>
            <div className="flex flex-col justify-center lg:flex-row gap-10 ">
                <div>
                    <input type="text" placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs mb-8 " /><br />
                    <input type="email" placeholder="Your Email" className="input input-bordered input-primary w-full max-w-xs mb-8 lg:w-[30vw]" /><br />
                    <input type="text" placeholder="Your Phone" className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div>
                    <input type="text" placeholder="Your message" className="textarea textarea-primary h-full lg:w-[20vw]"/>
                </div>
            </div>
            <button className="btn btn-primary my-10 ">Send Message</button>
        </div>
    );
};

export default ContactUs;