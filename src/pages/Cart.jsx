import { useLoaderData } from "react-router-dom";


const Cart = () => {
    const cartProducts =  useLoaderData();
    console.log(cartProducts);
    return (
        <div>
            <h3>Here is your cart info</h3>
        </div>
    );
};

export default Cart;