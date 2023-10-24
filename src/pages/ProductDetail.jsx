import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "../components/DetailsCard";

const ProductDetail = () => {
    const {name} = useParams();
    const products = useLoaderData();
    // console.log(products);
    const product = products.find(items=>{
        return items.name === name;
    })
    return (
        <div className="mb-20">
            <DetailsCard item={product}></DetailsCard>
        </div>
    );
};

export default ProductDetail;



