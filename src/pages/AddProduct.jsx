import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const AddProduct = () => {
    const [selectedType, setType] = useState('');
    const brands = useLoaderData();

    const brandList = <>
    {
        brands.map(brand=><><option>{brand.brandName}</option></>)
    }
    </>

    const handleSelect=(e)=>{
        setType(e.target.value)
        
    }
console.log(selectedType);
    const handleAdd = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const product = {name, image, brand, type, price, rating, description}
        console.log(product);
        form.reset();
        fetch('http://localhost:5000/product', {
            method: "POST",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }




    return (
        <div className="hero min-h-screen bg-base-300">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                    <h3 className="text-center font-bold text-3xl mt-8">Add Products</h3>
                <form className="card-body" onSubmit={handleAdd}>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="product name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" placeholder="image url" name="image" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Type</span>
                            </label>
                            <input type="text" placeholder="product type eg:phone,pc" name="type" className="input input-bordered " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand</span>
                            </label>
                            <select className="select select-info w-[100%] " name="brand" value={selectedType} onChange={handleSelect}>
                                {/* <option disabled selected>Select Product type</option> */}
                                {brandList}
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="price" name="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" placeholder="rating" name="rating" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Description</span>
                            </label>
                            <input type="text" placeholder="description" name="description" className="input input-bordered" required />
                        </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-secondary" type="submit" value="Add Product" />
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;