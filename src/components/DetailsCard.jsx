/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const DetailsCard = ({ item }) => {
    const {brand,  description, image, name, price, rating, type } = item;
    const {user} = useContext(AuthContext);
    const {email} = user;
    const product = {email, brand, description, image, name, price, rating, type }

        const handleClick =()=>{
            console.log('product added to cart');

            fetch('http://localhost:5000/cart', {
                method: "POST",
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(product)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                toast.success('Product Added to Cart!!!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })

        }
    return (
    <>
        <div className="card card-compact  mx-5 md:mx-10  mt-10 bg-base-200 shadow-xl ">
            <figure><img src={image} className="lg:w-[100%] lg:h-[100%] rounded-lg" alt="card-image" /></figure>
            <div className="card-body">
                <h2 className="card card-title  bg-[#060d5e] text-white ">Model: {name}</h2>
                <div className="flex flex-row justify-around">
                    <h2 className="font-semibold bg-[#060d5e] text-white p-2 rounded-full">Brand: {brand}</h2>
                    <h2 className="font-semibold bg-[#060d5e] text-white p-2 rounded-full">Type: {type}</h2>
                </div>
                <div className="flex flex-row justify-around">
                    <h2 className="font-semibold bg-[#060d5e] text-white p-2 rounded-full">Price: {price}/- </h2>
                    <h2 className="font-semibold bg-[#060d5e] text-white p-2 rounded-full">Rating: {rating}</h2>
                </div>

                <p><span className="font-semibold text-lg">Description:</span> {description}</p>
            </div>
            <div className="text-center mb-10">
                <button onClick={handleClick} className="btn btn-primary bg-[#060d5e]">Add to Cart</button>
            </div>
        </div>
        <ToastContainer />
        </>
    );
};

export default DetailsCard;
