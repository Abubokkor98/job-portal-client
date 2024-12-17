import React from "react";
import { useLoaderData } from "react-router-dom";

export default function ViewApplications() {
  const applications = useLoaderData();
  return (
    <div>
      <h2 className="text-3xl">
        Applictions for this job {applications.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Applicant Email</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applications.map((ap, i) => (
              <tr key={ap._id}>
                <th>{i+1}</th>
                <td>{ap.applicant_email}</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
