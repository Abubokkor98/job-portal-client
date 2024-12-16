import React from "react";

export default function HotJobCard({ job }) {
  const {
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="flex gap-2">
        <figure>
          <img className="w-16" src={company_logo} alt={company} />
        </figure>
        <div>
          <h4 className="text-2xl">{company}</h4>
          <p>{location}</p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex gap-2 flex-wrap">
          {requirements.map((skill,i) => (
            <p key={i}
            className="border rounded-md text-center hover:text-blue-600">{skill}</p>
          ))}
        </div>
        <div className="card-actions justify-end items-center mt-4">
            <p>Salary {salaryRange.min} {salaryRange.max} {salaryRange.currency}</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
