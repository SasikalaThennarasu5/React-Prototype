import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Result = () => {
  const trainees = [
    { name: "Kavya", trainer: "Priya", tech: 20, practical: 40 },
    { name: "Diya", trainer: "Priya", tech: 10, practical: 50 },
    { name: "Geetha", trainer: "Priya", tech: 15, practical: 45 },
    { name: "keerthi", trainer: "Priya", tech: 10, practical: 60 },
    { name: "Sujitha", trainer: "Priya", tech: 20, practical: 30 },
    { name: "Ramu", trainer: "Priya", tech: 25, practical: 60 },
    { name: "Ram", trainer: "Priya", tech: 15, practical: 30 }
  ];

  const styles = {
    fontFamily: "'Urbanist', sans-serif",
    backgroundColor: "#ffffff",
    color: "#000"
  };

  return (
    <div className="container-fluid min-vh-100 p-3" style={styles}>
      <div className="row text-center mb-4 g-3">
        {[
          { label: "Total Trainees", value: 15 },
          { label: "Total Marks", value: 100 },
          { label: "No of Student Present", value: 10 },
          { label: "No of Student Absent", value: 5 }
        ].map((item, idx) => (
          <div className="col-12 col-sm-6 col-md-3" key={idx}>
            <div className="p-3 rounded" style={{ backgroundColor: '#ecf8b3', color: '#000000' }}>
              <h6>{item.label}</h6>
              <h5>{item.value}</h5>
            </div>
          </div>
        ))}
      </div>

      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead>
  <tr>
    {["S.no", "Trainee's Name", "Trainer Name", "Technical Marks (Out of 30)", "Practical Marks (Out of 70)", "Total Marks"].map((heading, idx) => (
      <th key={idx} style={{ backgroundColor: '#201F31', color: 'white' }}>{heading}</th>
    ))}
  </tr>
</thead>
<tbody>
  {trainees.map((t, i) => (
    <tr key={i}>
      <td style={{ backgroundColor: '#D8F275' }}>{i + 1}</td>
      <td style={{ backgroundColor: '#D8F275' }}>{t.name}</td>
      <td style={{ backgroundColor: '#D8F275' }}>{t.trainer}</td>
      <td style={{ backgroundColor: '#D8F275' }}>{t.tech}</td>
      <td style={{ backgroundColor: '#D8F275' }}>{t.practical}</td>
      <td style={{ backgroundColor: '#D8F275' }}>{t.tech + t.practical}</td>
    </tr>
  ))}
</tbody>
        </table>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
        <button className="btn btn-dark">Download</button>
        <button className="btn" style={{ backgroundColor: '#ecf8b3', color: '#000000' }}>Edit</button>
      </div>
    </div>
  );
};

export default Result;
