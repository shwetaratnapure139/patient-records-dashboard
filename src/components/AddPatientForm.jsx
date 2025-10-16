import React, { useState } from 'react';

function AddPatientForm({ addPatient }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contact: '',
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.age && formData.contact) {
      addPatient(formData);
      setFormData({ name: '', age: '', contact: '', email: '' });
    }
  };

  return (
    <div className="mb-4">
      <h3 className="h5 mb-3">Add New Patient</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            placeholder="Age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Contact"
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email (optional)"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="form-control"
          />
        </div>
        <button
          type="submit"
          className="btn rounded-pill submitButton btn-outline-info" 
        >
          Add Patient
        </button>
      </form>
    </div>
  );
}

export default AddPatientForm;