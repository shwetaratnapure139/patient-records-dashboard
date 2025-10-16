import React, { useState } from 'react';

function PatientModal({ patient, onClose, onSave, isEditing }) {
  const [formData, setFormData] = useState(patient);

  const handleSave = () => {
    if (formData.name && formData.age && formData.contact) {
      onSave(formData);
      onClose();
    }
  };

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {isEditing ? 'Edit Patient' : patient.name}
            </h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            {isEditing ? (
              <>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Age</label>
                  <input
                    type="number"
                    className="form-control"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Contact</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </>
            ) : (
              <>
                <p><strong>Age:</strong> {patient.age}</p>
                <p><strong>Contact:</strong> {patient.contact}</p>
                <p><strong>Email:</strong> {patient.email}</p>
              </>
            )}
          </div>

          <div className="modal-footer">
            {isEditing ? (
              <button className="btn btn-success" onClick={handleSave}>
                Save Changes
              </button>
            ) : null}
            <button onClick={onClose} className="btn btn-secondary">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientModal;
