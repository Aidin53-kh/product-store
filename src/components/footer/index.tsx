import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="border-t py-3 mt-12 rtl">
            <div className="_container flex justify-between items-center">
            <Link to="/">
                <img className="w-24" src="/images/logo.png" alt="logo" />
            </Link>
            <p className="base-text-700">لورم ایپسوم متن ساختگی</p>
            </div>
        </footer>
    );
};

export default Footer;
