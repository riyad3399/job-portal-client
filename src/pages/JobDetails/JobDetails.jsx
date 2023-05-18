import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const loaderData = useLoaderData();
    console.log(loaderData);
    return (
        <div>
            <h3>job details</h3>
        </div>
    );
};

export default JobDetails;