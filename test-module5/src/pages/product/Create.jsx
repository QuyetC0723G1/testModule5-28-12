import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Field, Form, Formik} from "formik";
import {add} from "../../redux/services/productService.jsx";
import "./formAdd.css"

export default function AddProduct () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const addProduct = (values) => {
        dispatch(add(values)).then(() => {
            navigate('/products/list');
        })
    }
    return (
        <>
            <h2>ADD PRODUCT</h2>
            <Formik initialValues={
                {
                    title: '',
                    price: '',
                    description: ''
                }

            } onSubmit={addProduct}>
                <div className="main-formAdd">
                <Form>
                    <div className="formAdd">
                    <Field name="title" placeholder={"Name"} type={"text"}/>
                    <br/>
                    <Field name="description" placeholder={"Description"} type={"text"}/>
                    <br/>
                    <Field name="price" placeholder={"Price"} type={"text"}/>
                    <br/>
                    <button type={"submit"}>Add</button>
                    </div>

                </Form>
                </div>

            </Formik>

        </>
    )
}