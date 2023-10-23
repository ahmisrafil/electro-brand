/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
    const {_id, brand, description, image, name, price, rating, type } = product;
    
    
    return (
            <div className="card card-compact lg:w-[35vw] mx-5 md:mx-10  bg-stone-200 shadow-xl ">
            <figure><img src={image} className="lg:w-[100%] lg:h-[40vh]" alt="card-image" /></figure>
            <div className="card-body">
                <h2 className="card card-title">Model: {name}</h2>
                <div className="flex flex-row justify-around">
                    <h2 className="font-semibold">Brand: {brand}</h2>
                    <h2 className="font-semibold">Type: {type}</h2>
                </div>
                <div className="flex flex-row justify-around">
                    <h2 className="font-semibold">Price: {price}</h2>
                    <h2 className="font-semibold">Rating: {rating}</h2>
                </div>

                <p><span className="font-semibold">Description:</span>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/${name}`}><button className="btn btn-primary bg-[#060d5e]">Details</button></Link>
                    <Link to={`/update/${_id}`}><button className="btn btn-primary bg-[#060d5e]">Update</button></Link>
                    
                </div>
            </div>
        </div>
        );
};

export default ProductCard;