

const DetailsCard = ({item}) => {
    const { brand, description, image, name, price, rating, type } = item;

    return (
        <div className="card card-compact  mx-5 md:mx-10  mt-10 bg-cyan-300 shadow-xl ">
            <figure><img src={image} className="lg:w-[100%] lg:h-[100%] rounded-lg" alt="card-image" /></figure>
            <div className="card-body">
                <h2 className="card card-title w-[100%] bg-slate-200 ">Model: {name}</h2>
                <div className="flex flex-row justify-around">
                    <h2 className="font-semibold">Brand: {brand}</h2>
                    <h2 className="font-semibold">Type: {type}</h2>
                </div>
                <div className="flex flex-row justify-around">
                    <h2 className="font-semibold">Price: {price}</h2>
                    <h2 className="font-semibold">Rating: {rating}</h2>
                </div>

                <p><span className="font-semibold">Description:</span>{description}</p>
            </div>
        </div>
    );
};

export default DetailsCard;
