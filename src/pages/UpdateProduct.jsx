import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, name, price, image, rating, type } = product
    console.log(product);

    const [selectedType, setType] = useState('');


    const handleSelect = (e) => {
        setType(e.target.value)

    }
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const newProduct = { name, image, brand, type, price, rating }
        console.log(newProduct);

        fetch(`https://electro-brand-server-55la6v9on-ahm-israfils-projects.vercel.app/product/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                    Swal.fire(
                        'Updated!',
                        'Product updated successfully.',
                        'success'
                    )
                }
            })

    }



    return (
        <div className="hero min-h-screen bg-base-300">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                    <h3 className="text-center font-bold text-3xl mt-8">Update Product</h3>
                    <form className="card-body" onSubmit={handleUpdate}>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" defaultValue={name} name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" defaultValue={image} name="image" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Type</span>
                                </label>
                                <input type="text" defaultValue={type} name="type" className="input input-bordered " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand</span>
                                </label>
                                <select className="select select-info w-[100%] " name="brand" value={selectedType} onChange={handleSelect}>
                                    {/* <option disabled selected>Select Product type</option> */}
                                    <option>Samsung</option>
                                    <option>Apple</option>
                                    <option>Microsoft</option>
                                    <option>Xiaomi</option>
                                    <option>Intel</option>
                                    <option>Sony</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" defaultValue={price} name="price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" defaultValue={rating} name="rating" className="input input-bordered" required />
                            </div>
                        </div>
                        
                        <div className="form-control mt-6">
                            <input className="btn btn-secondary" type="submit" value="Update" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;