import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom'

const Error401 = () => {
    return (
        <div className="text-center my-40 px-6">
            <h1 className="text-xl samim-bold base-text-800 mb-8">ابتدا وارد سایت شوید تا به امکانات بیشتری دسترسی داشته باشید</h1>
            <Link to="/login">
                <Button className="bg-green-500 text-white rounded-full samim-bold mr-4 px-4">ورور</Button>
            </Link>
            <Link to="/register">
                <Button className="bg-green-500 text-white rounded-full samim-bold px-4">ثبت نام</Button>
            </Link>
        </div>
    )
}

export default Error401;