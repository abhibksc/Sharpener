
import { store_img_1 ,store_img_2,store_img_3,store_img_4,store_img_5,store_img_6,store_img_7 } from "../../Constants/Img";
import Typewriter from 'typewriter-effect';


const Store = () => {
    return <div className="bg-gradient-to-r from-violet-300 to-secondary">
        <div className="">

            <div >
                <img data-aos="fade-up"  className="w-full h-96 object-cover shadow-lg shadow-violet-300" src={store_img_1} alt="" />
                <h1 className="absolute top-40 text-wrap font-customFont p-3 text-white text-xl">
                <Typewriter
                                    options={{
                                        strings: "Exploring worlds through the language of music.",
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                  </h1>
            </div>
            <div  className="p-4 mt-10">
                <div className="flex flex-wrap justify-around gap-7">
                    <div data-aos="fade-up">
                        <h1 className="text-center font-bold text-md">Album 1</h1>
                        <img className="object-cover rounded-lg shadow-lg shadow-violet-300" src={store_img_2} alt="" />
                        <div className="flex justify-between p-2">
                            <span>$12.99</span>
                            <span>ADD TO CART</span>
                        </div>
                    </div>

                    <div data-aos="fade-up">
                    <h1 className="text-center font-bold text-md">Album 1</h1>

                        <img className="object-cover rounded-lg shadow-lg shadow-violet-300" src={store_img_3} alt="" />
                        <div className="flex justify-between p-2">
                            <span>$12.99</span>
                            <span>ADD TO CART</span>
                        </div>
                    </div>

                    <div data-aos="fade-up">
                    <h1 className="text-center font-bold text-md">Album 1</h1>

                        <img className="object-cover rounded-lg shadow-lg shadow-violet-300" src={store_img_4} alt="" />
                        <div className="flex justify-between p-2">
                            <span>$12.99</span>
                            <span>ADD TO CART</span>
                        </div>
                    </div>

                    <div data-aos="fade-up">
                    <h1 className="text-center font-bold text-md">Album 1</h1>

                        <img className=" object-cover rounded-lg shadow-lg shadow-violet-300" src={store_img_5} alt="" />
                        <div className="flex justify-between p-2">
                            <span>$12.99</span>
                            <span>ADD TO CART</span>
                        </div>
                    </div>


                    <div data-aos="fade-up">
                  <h1 className="text-center font-bold text-md">Album 1</h1>

                        <img className="object-cover rounded-lg shadow-lg shadow-violet-300" src={store_img_6} alt="" />
                        <div className="flex justify-between p-2">
                            <span>$12.99</span>
                            <span>ADD TO CART</span>
                        </div>
                    </div>

                    <div data-aos="fade-up">
                    <h1 className="text-center font-bold text-md">Album 1</h1>

                        <img className="object-cover rounded-lg shadow-lg shadow-violet-300" src={store_img_7} alt="" />
                        <div className="flex justify-between p-2">
                            <span>$12.99</span>
                            <span>ADD TO CART</span>
                        </div>
                    </div>
  
                </div>
            </div>

        </div>
    </div>
}

export default Store;