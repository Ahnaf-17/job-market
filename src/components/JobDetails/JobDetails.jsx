import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const inInt = parseInt(id);
    const job = jobs.find(job => job.id===inInt)
    console.log(job)

    const handleApplyJob =() =>{
        toast('applied successfully')
    }
    return (
        <div>

            
            <div className="grid md:grid-cols-4 gap-4">
                <div className=" md:col-span-3">
                    <h2 className="text-2xl font-bold">Details</h2>
                    <h2>this is details of : {job.job_title} </h2>
                    <p>{job.company_name}</p>
                </div>
                <div className="border">
                    <h2>side things</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;