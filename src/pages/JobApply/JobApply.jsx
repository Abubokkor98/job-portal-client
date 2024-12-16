import React from 'react'
import { useParams } from 'react-router-dom';
import useAuth from '../../custom-hooks/UseAuth';

export default function JobApply() {
    const {id} = useParams();
    const {user} = useAuth();
    // console.log(id, user);


    const handleSubmitApplication = e =>{
        e.preventDefault();

        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        // console.log(linkedIn, github, resume);

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            github,
            resume
        }
        console.log(jobApplication);
    }

  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Apply now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmitApplication} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn</span>
          </label>
          <input type="url" name='linkedIn' placeholder="LinkedIn URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URL</span>
          </label>
          <input type="url" name='github' placeholder="github URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume</span>
          </label>
          <input type="url" name='resume' placeholder="Resume URL" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}
