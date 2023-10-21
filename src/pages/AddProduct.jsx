

const AddProduct = () => {
    return (
        <div className="hero min-h-screen bg-base-300">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                <form className="card-body">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="product name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" placeholder="image url" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input type="text" placeholder="brand name" className="input input-bordered " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Type</span>
                            </label>
                            <select className="select select-info w-[100%] ">
                                <option disabled selected>Select Product type</option>
                                <option>Phone</option>
                                <option>Tablet</option>
                                <option>Computer</option>
                                <option>Laptop</option>
                                <option>Smart Watch</option>
                                <option>Headphone</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" placeholder="rating" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Description</span>
                            </label>
                            <input type="text" placeholder="description" className="input input-bordered" required />
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