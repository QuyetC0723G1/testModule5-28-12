import {Home} from "./pages/Home.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import ListProduct from "./pages/product/ListProduct.jsx";
import AddProduct from "./pages/product/Create.jsx";
import UpdateProduct from "./pages/product/Update.jsx";
import ProductDetail from "./pages/product/productDetail.jsx";


function App() {
  return (
    <>
        <Routes>
            <Route path={'products'} element={<Home/>}>
                <Route path={'list'} element={<ListProduct/>}/>
                <Route path={'add'} element={<AddProduct/>}/>
                <Route path={'edit/:id'} element={<UpdateProduct/>}/>
                <Route path={':id'} element={<ProductDetail/>}/>
            </Route>

            <Route path='*' element={<Navigate to = "products/list"/>}/>
            {/*dieu huong trang khi nhap sai*/}
        </Routes>
    </>
  )
}

export default App
