import { Formik } from "formik";
import Swal from "sweetalert2";
import app_config from "../config";

const AddProduct = () => {

    const url = app_config.api_url;
    const productForm = {
        name: '',
        price: '',
        details: [],
        category: '',
        created: new Date()
    }

    const formSubmit = (values) => {
        console.log(values);

        const reqOptions = {
            method: 'POST',
            body: JSON.stringify(values),
            headers: { 'Content-Type': 'application/json' }
        }

        fetch(url + '/product/add', reqOptions)
            .then((res) => {
                console.log(res.status);
                if (res.status == 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Product Added',
                        text: 'Visit Browse Product to view changes!'
                    })
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
            })

    }

    return (
        <div>


            <div className="col-md-4 mx-auto">
                <div className="card">
                    <div className="card-body">
                        <h1 className="text-center">Add Product Form</h1>
                        <hr className="mt-5" />
                        <Formik initialValues={productForm} onSubmit={formSubmit} >
                            {
                                ({
                                    values, handleChange, handleSubmit
                                }) => (
                                    <form onSubmit={handleSubmit}>
                                        <input placeholder="Product Name" className="form-control mb-3" id="name" onChange={handleChange} value={values.name} />
                                        <input placeholder="Product Price" className="form-control mb-3" id="price" onChange={handleChange} value={values.price} type="number" />
                                        <input placeholder="Product Details" className="form-control mb-3" id="details" onChange={handleChange} value={values.details} />
                                        <input placeholder="Product Category" className="form-control mb-3" id="category" onChange={handleChange} value={values.category} />

                                        <button className="btn btn-primary" type="submit">Submit</button>
                                    </form>
                                )

                            }
                        </Formik>
                    </div>
                </div>
            </div>



        </div>
    )

}

export default AddProduct;