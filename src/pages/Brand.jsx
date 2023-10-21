import { useParams } from "react-router-dom";


const Brand = () => {
    const {brandName} =  useParams();
    console.log(brandName);
    return (
        <div>
            
        </div>
    );
};

export default Brand;