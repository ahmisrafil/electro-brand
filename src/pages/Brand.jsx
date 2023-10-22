import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";


const Brand = () => {
    const { brandName } = useParams();
    console.log(brandName);
    const slider = [
        {
            "id": 1,
            "brand": "Samsung",
            "image1": "https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Samsung-Galaxy-Social-Media-Banner-Design-1536x864.jpg",
            "image2": "https://i.ibb.co/M1SpqTF/samsung-baneer.jpg",
            "image3": "https://www.singgalangnews.com/foto_berita/41Galaxy%20Land%20Banner.jpg"
        },
        {
            "id": 2,
            "brand": "Apple",
            "image1": "https://i.ytimg.com/vi/KpI-QDbrf0Y/maxresdefault.jpg",
            "image2": "https://i.ytimg.com/vi/OXi6C0bNIhE/maxresdefault.jpg",
            "image3": "https://i.ibb.co/hckmTTy/iphone.webp"
        },
        {
            "id": 3,
            "brand": "Microsoft",
            "image1": "https://i.ibb.co/yph96mX/zy-Vb-Uadgd-CMF66-Lu-N3c-Mge.jpg",
            "image2": "https://sm.pcmag.com/t/pcmag_uk/news/m/microsoft-/microsoft-accused-of-copying-xbox-one-pubg-ad-concept_vd24.1920.jpg",
            "image3": "https://i.ytimg.com/vi/NqPeeO-7yT4/maxresdefault.jpg"
        },
        {
            "id": 4,
            "brand": "Xiaomi",
            "image1": "https://fdn.gsmarena.com/imgroot/news/21/07/xiaomi-mi-11-ultra-reg-india/-1200/gsmarena_002.jpg",
            "image2": "https://ecdn.dhakatribune.net/contents/cache/images/1200x630x1xxxxx1/uploads/dten/2022/02/15/redmi-10-2022.jpeg",
            "image3": "https://www.mansworldindia.com/wp-content/uploads/2022/04/IMG_4931.jpg"
        },
        {
            "id": 5,
            "brand": "Intel",
            "image1": "https://miro.medium.com/v2/resize:fit:2000/1*44vZedOoOcczFNo34Xvugw.jpeg",
            "image2": "https://www.dignited.com/wp-content/uploads/2022/09/Intel-Laptop-CPU-_6-1024x576.png",
            "image3": "https://www.selectyourdeals.com/wp-content/uploads/2019/09/intel-processor-list.jpg"
        },
        {
            "id": 6,
            "brand": "Sony",
            "image1": "https://i.ytimg.com/vi/4vTWf0LYoDM/maxresdefault.jpg",
            "image2": "https://mir-s3-cdn-cf.behance.net/project_modules/fs/d433f752369947.590f8f064f9ce.jpg",
            "image3": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/fb439443288877.57ea2d9a6fd48.jpg"
        }

    ]

    const products = useLoaderData();
    console.log(products);
    return (<>
        <div>
            {
                slider.map(slide => slide.brand == brandName &&
                    <div key={slide.id} className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={slide.image1} className="w-full h-[90vh]" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={slide.image2} className="w-full h-[90vh]" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={slide.image3} className="w-full h-[90vh]" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                    </div>
                )}
        </div>
        <h3 className="text-center font-sans font-semibold text-4xl mt-20 mb-10">Available Products</h3>
        <div className="flex flex-col gap-8 justify-center  mx-auto lg:grid lg:grid-cols-2 lg:mx-10 ">

            {
                products?.map(product => product.brand == brandName && <ProductCard key={product._id} product={product}></ProductCard>)
            }
        </div>
    </>
    );
};

export default Brand;