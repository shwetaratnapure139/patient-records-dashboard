import React from 'react';

function PatientCard({ patient, onViewDetails, onEdit, onDelete }) {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{patient.name}</h5>
          <p className="card-text">Age: {patient.age}</p>
          <p className="card-text">Contact: {patient.contact}</p>

          <div className="d-flex gap-2">
            <button onClick={onViewDetails} className="btn onViewDetails btn-sm">
              View
            </button>
            <button onClick={onEdit} className="btn onViewDetails btn-sm">
              Edit
            </button>
            <button onClick={onDelete} className="btn onViewDetails btn-sm">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientCard;
