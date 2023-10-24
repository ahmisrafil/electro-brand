// ES6 Modules or TypeScript
import Swal from 'sweetalert2'


const CartDetails = ({ cart }) => {
    const { _id, brand, image, name, price } = cart;
    console.log(brand, image, name, price);


    const handleDelete = _id => {
        console.log('deleted');
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://electro-brand-server-55la6v9on-ahm-israfils-projects.vercel.app/cart/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if(data.deletedCount>0){
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                        }
                    })
                
            }
        })

    }

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
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;