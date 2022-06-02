import React, { useEffect, useState } from 'react';

const HomePage = () => {
    const [jobs, setJobs] = useState({})
    useEffect(() => {
        fetch('http://refertest.pythonanywhere.com/job/openings')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
};

export default HomePage;