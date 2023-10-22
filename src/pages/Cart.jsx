import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import CartDetails from "../components/CartDetails";


const Cart = () => {
    const {user} = useContext(AuthContext);
    const cartProducts =  useLoaderData();
    return (
        <div>
            <h3>Here is your cart info</h3>
            <div>
                {
                    cartProducts?.map(cart=>cart.email === user.email && <CartDetails key={cart._id} cart={cart}></CartDetails>)
                }
            </div>
        </div>
    );
};

export default Cart;