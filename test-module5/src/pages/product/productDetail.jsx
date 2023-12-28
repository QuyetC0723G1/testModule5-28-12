import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getById} from "../../redux/services/productService.jsx";

export default function ProductDetail () {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const product = useSelector(({products}) => {
        return products.newProduct;
    })
    const {id} = useParams()
    useEffect(() => {
        dispatch(getById(id));
    }, [])
    return (
        <>
            <h2>Product Detail</h2>
            <div>
                <h3>Name : {product.title}</h3>
                <h3>Description : {product.description}</h3>
                <h3>Price : {product.price}</h3>
                <button onClick={() => {navigate('/products/list')}}>Return Home</button>
            </div>
        </>
    )
}