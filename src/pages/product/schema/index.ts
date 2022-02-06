import * as Yup from "yup";
import { Product } from "../../../store/product/types";

export const productSchema = Yup.object({
    title: Yup.string()
        .min(5, "عنوان اگهی باید بیشتر از 5 کارکتر باشد")
        .max(40, "عنوان اگهی نباید بیشتر از 40 کارکتر باشد")
        .required("عنوان اگهی را کامل کنید"),
    price: Yup.string().max(12, "قیمت معتبر نیست").required("قیمت محصول را وارد کنید"),
    details: Yup.string()
        .min(20, "توضیحات اکهی باید بیشتر از 20 کارکتر باشد")
        .max(10000, "توضیحات اگهی طولانی است")
        .required("توضیحات اگهی را کامل کنید"),
    city: Yup.string().required("شهر خود را انتخاب کنید"),
    group: Yup.string().required("گروه آگهی خود را انتخاب کنید"),
});

export const PRODUCT_INITIAL_VALUES: Product = {
    title: "",
    price: "",
    details: "",
    city: "",
    group: "",
    categorie: "",
    province: "",
    _id: "",
    user: "",
    createdAt: "",
};
