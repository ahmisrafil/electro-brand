

const CartDetails = ({cart}) => {
    const {brand, image, name, price } = cart;
    console.log(brand, image, name, price);
    return (
        <div className="card card-side w-[90vw] my-4 mx-auto bg-base-100 shadow-xl">
            <figure><img className="h-32" src={image} alt="image" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="flex flex-col md:flex-row">
                <p>Brand:{brand}</p>
                <p>Price:{price}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;