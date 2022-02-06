import { useState } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import { Formik, Form } from "formik";

import { User } from "../../../store/user/types";
import { State } from "../../../store";
import { Product } from "../../../store/product/types";
import { TextArea, TextField } from "../../../components/textfield";
import { handleEditProduct } from "../../../store/products/actions";
import { productSchema } from "../schema";
import { CityDialog, GroupDialog } from "../../../components/dialogs";

const EditProduct: React.FC = () => {
    const history = useHistory();
    const match = useRouteMatch();
    const productId = (match.params as { id: string }).id;

    const user = useSelector<State, User>((state) => state.user as User);
    const product = useSelector<State, Product>((state) => {
        return state.products.find((product) => product._id === productId && product.user === user.id);
    });

    const [openProvinceDialog, setOpenProvinceDialog] = useState(false);
    const [openCategorieDialog, setOpenCategorieDialog] = useState(false);

    const dispatch = useDispatch();

    const editProduct = (values: Product) => {
        dispatch(handleEditProduct(values, productId));
        history.replace("/");
    };

    if (!product) {
        history.replace("/");
        return null;
    }

    return (
        <div className="_container rtl">
            <motion.div className="max-w-4xl mx-auto base-bg-800 relative rounded-md p-3 my-16 shadow-md lg:p-5">
                <header className="rtl mt-2 mb-5">
                    <h1 className="base-text-800 text-xl samim-bold">ویرایش اگهی</h1>
                </header>

                <main>
                    <Formik initialValues={{ ...product }} onSubmit={editProduct} validationSchema={productSchema}>
                        {({ setFieldValue }) => (
                            <Form>
                                <TextField label="عنوان آگهی *" name="title" placeholder="عنوان آگهی" />
                                <TextField label="قیمت" name="price" type="number" placeholder="قیمت" />
                                <TextField
                                    onClick={() => setOpenProvinceDialog(true)}
                                    readOnly
                                    label="شهر"
                                    name="city"
                                />
                                <TextField
                                    onClick={() => setOpenCategorieDialog(true)}
                                    label="گروه بندی"
                                    readOnly
                                    name="group"
                                />
                                <TextArea label="توضیحات اگهی *" name="details" placeholder="توضیحات" rows={6} />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    className="bg-green-500 text-white rounded-full samim-bold ml-4"
                                >
                                    ویرایش آگهی
                                </Button>
                                <Link to="/my-products">
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        className="bg-red-500 text-white rounded-full samim-bold"
                                    >
                                        انصراف
                                    </Button>
                                </Link>
                                <CityDialog
                                    setFieldValue={setFieldValue}
                                    openProvinceDialog={openProvinceDialog}
                                    setOpenProvinceDialog={setOpenProvinceDialog}
                                />
                                <GroupDialog
                                    setFieldValue={setFieldValue}
                                    openCategorieDialog={openCategorieDialog}
                                    setOpenCategorieDialog={setOpenCategorieDialog}
                                />
                            </Form>
                        )}
                    </Formik>
                </main>
            </motion.div>
        </div>
    );
};

export default EditProduct;
