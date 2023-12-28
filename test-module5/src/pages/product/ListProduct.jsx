import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAll, removeById} from "../../redux/services/productService.jsx";
import {Link} from "react-router-dom";

const ListProduct = () => {
    const dispatch = useDispatch();
    const products = useSelector(({products})=>{
        console.log(products.list)
        return products.list;
    })

    useEffect(() => {
        dispatch(getAll());
    }, [])

    function handleDelete(id) {
        let isConfirmed = confirm("Are you sure you want to delete");
        if (isConfirmed)    {
            dispatch(removeById(id)).then(()=> {
                dispatch(getAll());
            })
        }
        else {
            alert("Oke la")
        }
    }

    return (
        <>
            <h4 style={{justifyContent:"center",alignItems:"center",textAlign:"center",color:"blueviolet"}}>LIST PRODUCT</h4>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col" colSpan={2}>Action</th>
                </tr>
                </thead>
                <tbody>
                {products.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td><Link to={`/products/${item.id}`}>{item.title}</Link></td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>
                                <Link to={`/products/edit/${item.id}`}><button type="button" className="btn btn-primary">Edit</button></Link>
                                <button onClick={()=> {handleDelete(item.id)}} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
                
            </table>
        </>
    )
}
export default ListProduct;
