
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PatientCard from '../components/PatientCard';
import PatientModal from '../components/PatientModal';
import AddPatientForm from '../components/AddPatientForm';

const LOCAL_KEY = 'jaruratcare_patients_v1';

function Patients() {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load from localStorage or API
  useEffect(() => {
    setLoading(true);
    try {
      const saved = localStorage.getItem(LOCAL_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setPatients(parsed);
        setFilteredPatients(parsed);
        setLoading(false);
        return;
      }
    } catch {}

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const mockPatients = response.data.map((user) => ({
          id: user.id,
          name: user.name,
          age: Math.floor(Math.random() * (80 - 18 + 1)) + 18,
          contact: user.phone,
          email: user.email,
        }));
        setPatients(mockPatients);
        setFilteredPatients(mockPatients);
        localStorage.setItem(LOCAL_KEY, JSON.stringify(mockPatients));
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch patient data');
        setLoading(false);
      });
  }, []);

  // Handle search
  useEffect(() => {
    setFilteredPatients(
      patients.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, patients]);

  // Add patient
  const addPatient = (newPatient) => {
    const patientWithId = { ...newPatient, id: Date.now(), age: Number(newPatient.age) };
    const newPatients = [...patients, patientWithId];
    setPatients(newPatients);
    setFilteredPatients(newPatients);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(newPatients));
  };

  // Delete patient
  const deletePatient = (id) => {
    if (!window.confirm('Are you sure you want to delete this patient?')) return;
    const updated = patients.filter((p) => p.id !== id);
    setPatients(updated);
    setFilteredPatients(updated);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
  };

  // Update patient
  const updatePatient = (updatedPatient) => {
    const updated = patients.map((p) => (p.id === updatedPatient.id ? updatedPatient : p));
    setPatients(updated);
    setFilteredPatients(updated);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
  };

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-center py-4 text-danger">{error}</div>;

  return (
    <div className="container py-4">
      <h2 className="h3 mb-4">Patients</h2>

      <input
        type="text"
        placeholder="Search patients by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="form-control mb-4"
      />

      <AddPatientForm addPatient={addPatient} />

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {filteredPatients.map((patient) => (
          <PatientCard
            key={patient.id}
            patient={patient}
            onViewDetails={() => {
              setSelectedPatient(patient);
              setIsEditing(false);
            }}
            onEdit={() => {
              setSelectedPatient(patient);
              setIsEditing(true);
            }}
            onDelete={() => deletePatient(patient.id)}
          />
        ))}
      </div>

      {selectedPatient && (
        <PatientModal
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
          onSave={updatePatient}
          isEditing={isEditing}
        />
      )}
    </div>
  );
}

export default Patients;
