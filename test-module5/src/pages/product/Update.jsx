import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Field, Form, Formik} from "formik";
import {getById, update} from "../../redux/services/productService.jsx";
import "./formAdd.css"

export default function UpdateProduct() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const product = useSelector(({products}) => {
        return products.newProduct;
    })
    const {id} = useParams();
    useEffect(() => {
        dispatch(getById(id))
    }, [])

    const save = (values) => {
        dispatch(update(values)).then(() => {
            navigate('/products/list');
        })
    }
    return (
        <>
            <h2>UP DATE PRODUCT</h2>
            <Formik initialValues={product} onSubmit={save}
                    enableReinitialize={true}
            >
                <div className="main-formAdd">
                    <Form>
                        <div className="formAdd">
                            <Field name="title" placeholder={"Name"} type={"text"}/>
                            <br/>
                            <Field name="description" placeholder={"Description"} type={"text"}/>
                            <br/>
                            <Field name="price" placeholder={"Price"} type={"text"}/>
                            <br/>
                            <button type={"submit"}>Save</button>
                        </div>
                    </Form>
                </div>
            </Formik>
        </>
    )
}