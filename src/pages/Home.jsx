import { Link, useLoaderData } from "react-router-dom";
import Founders from "../components/Founders";
import ContactUs from "../components/ContactUs";


const Home = () => {
    const brands = useLoaderData();


    return (
        <div>
            <img className="lg:h-[90vh]  w-[100vw]" src="https://i.ibb.co/X307Xmw/Electro-banner-new.png" alt="banner" ></img>

            {/* brand collection */}
            <div className="flex flex-col justify-center items-center mx-auto">
                <h3 className="text-center font-sans font-semibold text-4xl mt-20 mb-10">Available Brands</h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3  mx-auto gap-6 ">
                    {
                        brands.map(brand =>
                            <Link key={brand.id} to={`/brands/${brand.brandName}`}>
                                <div className="flex flex-col w-[80vw] md:w-[40vw] md:h-[40vh] lg:w-[28vw]">
                                    <img className="w-[80vw] md:w-[40vw] md:h-[40vh] lg:w-[28vw] rounded-md" src={brand.image} alt="" />
                                    <p className="text-2xl font-semibold text-white mt-6 ml-4 absolute">{brand.brandName}</p>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>




            <Founders></Founders>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;