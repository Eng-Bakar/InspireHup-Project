import { FaBackward } from "react-icons/fa6";
import { Link } from "react-router-dom";
function WorkerForm (){
    return <div className="bg-lightBlue w-full h-screen py-5">
        <div className="w-[350px] ml-[35%]  shadow-lg  h-[540px] rounded-[20px] bg-white ">
            <form className="pt-4 ">
                <div className="flex ">
                    <Link to="/workerDashboard"><FaBackward className="absolute text-[25px] mt-2 text-skyBlue hover:text-deepBlue ml-[310px]" /></Link>
                    <h1 className=" text-center text-skyBlue ml-[80px] font-semibold font-Roboto text-[25px]">Apply Permission </h1>
                </div>
                <div className="px-6 mt-3">
                    <label className="text-deepBlue font-semibold">Name</label>
                    <input type="text" placeholder="Enter name" className="w-[300px] h-[40px] text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2" />
                    <div>
                        <div className="flex mt-1 justify-between ">
                            <label className="text-deepBlue font-semibold ml-1">ID</label>
                            <label className="text-deepBlue font-semibold mr-[110px]">Title</label>
                        </div>
                        <input type="text" placeholder="Enter ID" className="w-[140px] h-[40px] text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2 " />
                        <input type="text" placeholder="Enter Title" className="w-[140px] h-[40px] text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2 ml-5 " />
                    </div>
                    <div>
                        <div className="flex mt-1 justify-between ">
                            <label className="text-deepBlue font-semibold ml-1">Start Date</label>
                            <label className="text-deepBlue font-semibold mr-[74px]">End Date</label>
                        </div>
                        <input type="date" placeholder="Enter ID" className="w-[140px] h-[40px] text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2 " />
                        <input type="date" placeholder="Enter Title" className="w-[140px] h-[40px] text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2 ml-5 mb-1" />
                    </div>
                    <div>
                        <div className="flex mt-1 justify-between ">
                            <label className="text-deepBlue font-semibold ml-1">Duration</label>
                            <label className="text-deepBlue font-semibold mr-[55px]">Destination</label>
                        </div>
                        <input type="text" placeholder="Duration of trip" className="w-[140px] h-[40px] text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2 " />
                        <input type="text" placeholder="Trip Destination" className="w-[140px] h-[40px] text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2 ml-5 mb-1" />
                    </div>
                    <label className="text-deepBlue  font-semibold ">Permission Reason</label>
                    <textarea className="w-[300px] h-[100px] text-deepBlue bg-lightBlue outline-none rounded-[10px] px-2 mt-1 py-1"></textarea>
                    <button className="w-[300px] h-[40px] text-white bg-deepBlue hover:bg-skyBlue rounded-[10px] mt-3" placeholder="Enter Permission Reason"> Submit</button>
                </div>

            </form>
        </div>
    </div>
}
export default WorkerForm