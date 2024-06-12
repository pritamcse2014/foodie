import './Navbar.css'
import Logo from '../../assets/food-logo.png'
import { FaCartShopping } from "react-icons/fa6"
import DarkMode from '../DarkMode/DarkMode';

const Navbar = () => {
    return (
        <div>
            <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
                <div className="container py-3 sm:py-0">
                    <div className="flex justify-between items-center">
                        <div>
                            <a className="flex items-center gap-2 text-2xl sm:text-3xl font-bold" href="#">
                                <img className="w-10" src={Logo} alt="Logo" />
                                Foodie
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <div>
                                <DarkMode />
                            </div>
                            <ul className="hidden sm:flex gap-4">
                                <li>
                                    <a className="inline-block px-4 py-4 hover:text-primary" href="#">Home</a>
                                </li>
                                <li>
                                    <a className="inline-block px-4 py-4 hover:text-primary" href="#">About</a>
                                </li>
                                <li>
                                    <a className="inline-block px-4 py-4 hover:text-primary" href="#">Contact</a>
                                </li>
                            </ul>
                            <button className="bg-gradient-to-r from-primary to-secondary text-white
                            px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-3">
                                Order
                                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;