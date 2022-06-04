import React, { useEffect, useState } from 'react';
import '../HomePage.css';
const HomePage = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('http://refertest.pythonanywhere.com/job/openings', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => setJobs(data?.data))
    }, [])
    console.log(jobs);
    return (

        <div className=''>
            <h1 className='text-center text-4xl my-4'>Jobs</h1>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-4'>
                    {
                        jobs?.length === 0 ? <h1 className='text-center text-accent text-5xl'>No Jobs Yet</h1> :
                            jobs?.map(job => <div class="card  bg-base-100 shadow-xl">

                                <div class="card-body hover:bg-teal-100 ease-in ">
                                    <h2 class="card-title">
                                        {job?.designation}
                                    </h2>
                                    <h4>Company: {job?.company}</h4>
                                    <h4>Loaction: {job?.location}</h4>

                                    <h2> {job?.min_experience === 0 ? <h4 className='badge badge-accent'>Fresher</h4> : <h4 className='badge badge-accent'>Minimum Experiance: {job.min_experience} years</h4>}</h2>
                                    <div class="">
                                        <p> {
                                            job?.skills?.map(skill => <span className='badge badge-outline m-2'>{skill}</span>)
                                        }</p>

                                    </div>
                                </div>
                            </div>)

                    }
                </div>
            </div>
        </div>
    );
};


{/* <div className='single-Jobs'>
                                <div>
                                    <h1></h1>
                                  
                                </div>
                            </div> */}
export default HomePage;