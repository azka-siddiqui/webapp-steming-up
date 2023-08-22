import React, { useState } from 'react';
import '../form/form.css'; 

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
    // Your form submission logic here
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Get started here</h1>
      <h2 style={{ fontSize: '15px', color: 'grey' }}>Fill out our innovation form</h2>
      <form className="idea-form" onSubmit={handleSubmit}>
        {/* ...other input fields... */}
        
        <div className="input-group">
          <label htmlFor="areaOfFocus">Area of Focus:</label>
          <select id="areaOfFocus" name="areaOfFocus">
            <option value="transportation">Transportation and Energy</option>
            <option value="greenBuildings">Green Buildings</option>
            <option value="waterconservation">Water Conservation</option>
            {/* ...other options... */}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="potentialImpact">Potential Impact:</label>
          <textarea id="potentialImpact" name="potentialImpact" rows="4" required />
        </div>

        <div className="input-group">
          <label htmlFor="termsAndConditions">
            <input type="checkbox" id="termsAndConditions" name="termsAndConditions" required />
            I agree to the terms and conditions
          </label>
        </div>

        <button type="submit" className="submit-button">
          Submit Idea
        </button>
      </form>
    </div>
  );
};

export default Form;