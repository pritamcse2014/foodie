import './Footer.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt,} from "react-icons/fa";
import footerLogo from "../../assets/food-logo.png";

const Footer = () => {
    return (
        <div>
            <div className="bg-gray-100 dark:bg-gray-950">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid md:grid-cols-3 py-5">
                        <div className="px-4 py-8">
                            <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                                <img className="max-w-[50px]" src={footerLogo} alt="Food Logo" />
                                FOODIE
                            </h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit placeat debitis, fugit odio assumenda explicabo illo a laudantium sint voluptas!</p>
                            <br />
                            <div className="flex items-center gap-3">
                                <FaLocationArrow />
                                <p>Noida, Uttar Pradesh</p>
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <FaMobileAlt />
                                <p>123 456 789</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mt-6">
                                    <a href="#">
                                        <FaInstagram className="text-3xl" />
                                    </a>
                                    <a href="#">
                                        <FaFacebook className="text-3xl" />
                                    </a>
                                    <a href="#">
                                        <FaLinkedin className="text-3xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                            <div>
                                <div className="px-4 py-8">
                                    <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Important Links</h1>
                                    <ul className="flex flex-col gap-3">
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Services</li>
                                        <li>Login</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="px-4 py-8">
                                    <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Important Links</h1>
                                    <ul className="flex flex-col gap-3">
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Services</li>
                                        <li>Login</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="px-4 py-8">
                                    <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Important Links</h1>
                                    <ul className="flex flex-col gap-3">
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Services</li>
                                        <li>Login</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-center py-10 border-t-2 border-gray-300/50">
                            @copyright 2024 All rights reserved || Made with ❤️ by Pritam Kumar Kundu.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;