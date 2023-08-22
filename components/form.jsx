import React, { useState } from 'react';

const Form = () => {
  const [submissionType, setSubmissionType] = useState('text');
  const [file, setFile] = useState(null);
  const [idea, setIdea] = useState('');

  const handleSubmissionTypeChange = (event) => {
    setSubmissionType(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleIdeaChange = (event) => {
    setIdea(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f0f0',
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <div style={{
        backgroundColor: '#fff',
        color: '#333',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        width: '400px',
      }}>
        <h1 style={{ color: '#8c59a5', marginBottom: '20px' }}>Get started here</h1>
        <h2 style={{ fontSize: '15px', color: 'grey' }}>Fill out our innovation form</h2>
        <form onSubmit={handleSubmit}>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="areaOfFocus">Area of Focus:</label>
            <select id="areaOfFocus" name="areaOfFocus" style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '14px',
            }}>
              <option value="transportation">Transportation and Energy</option>
              <option value="greenBuildings">Green Buildings</option>
              <option value="waterconservation">Water Conservation</option>
              
            </select>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="potentialImpact">Potential Impact:</label>
            <textarea id="potentialImpact" name="potentialImpact" rows="4" required style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '14px',
              resize: 'vertical',
            }} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="termsAndConditions">
              <input type="checkbox" id="termsAndConditions" name="termsAndConditions" required style={{ marginRight: '5px' }} />
              I agree to the terms and conditions
            </label>
          </div>

          <button type="submit" style={{
            backgroundColor: '#8c59a5',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '14px',
          }}>
            Submit Idea
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;