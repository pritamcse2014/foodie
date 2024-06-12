import './Services.css'
import Img1 from "../../assets/biryani2.png";
import Img2 from "../../assets/biryani4.png";
import Img3 from "../../assets/biryani3.png";
// import StarRatings from "react-star-ratings";
const ServicesData = [
    {
        id: 1,
        img: Img1,
        name: "Biryani",
        description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    },
    {
        id: 2,
        img: Img2,
        name: "Chicken Kari",
        description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
    {
        id: 3,
        img: Img3,
        name: "Masala",
        description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
];

const Services = () => {
    return (
        <div>
            <div className="py-10">
                <div className="container">
                    <div className="text-center mb-20 max-w-[400px] mx-auto">
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Our Services</p>
                        <h1 className="text-3xl font-bold">Services</h1>
                        <p className="text-xs text-gray-400">
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam vel labore odio velit, quam excepturi neque repudiandae unde asperiores!
                        </p>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                            {
                                ServicesData.map((service) => {
                                    return (
                                        <div data-aos="zoom-out" data-aos-duration="400" data-aos-once="true" key={service.id} className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary hover:text-white duration-300 shadow-xl">
                                            <div className="h-[100px]">
                                                <img className="max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" src={service.img} alt="Image" />
                                            </div>
                                            <div className="p-4 text-center">
                                                <h1 className="text-xl font-bold">{service.name}</h1>
                                                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{service.description}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;