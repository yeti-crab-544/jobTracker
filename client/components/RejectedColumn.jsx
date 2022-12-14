import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import Job from "./Job";


const RejectedColumn = () => {

  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api')
      .then(jobs => jobs.json())
      .then((parsedJobs) => {
        setState(parsedJobs);
      })
      .catch(err => console.log('Jobs.useEffect: get jobs: ERROR: ', err));
  }, [])

  const elems = state.map((job, i) => {
    if (job.status === 'rejected')
      return (
        <Job
          key={i}
          info={job}
        />
      );
  });


  return (
    <div className="column">
      <div className="columnHeader">
        <h1>Application Rejected</h1>
      </div>
    <br />
      {elems}
    </div>
  )
}

export default RejectedColumn;