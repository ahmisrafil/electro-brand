import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";


const Brand = () => {
    const {brandName} =  useParams();
    console.log(brandName);

    const products =  useLoaderData();
    console.log(products);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  items-center mx-auto">
            {
                products?.map(product=>product.brand == brandName && <ProductCard key={product._id} product={product}></ProductCard>)
            }
        </div>
    );
};

export default Brand;