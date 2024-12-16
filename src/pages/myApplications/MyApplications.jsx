import React, { useEffect, useState } from 'react'
import useAuth from '../../custom-hooks/UseAuth'

export default function MyApplications() {
    const {user} = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[user.email])
  return (
    <div>
        <h2 className="text-3xl">MyApplications {jobs.length}</h2>
    </div>
  )
}
