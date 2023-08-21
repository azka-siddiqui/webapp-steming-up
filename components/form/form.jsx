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
    
  };

  return (
    <div className="form-container">
     <h1 class="form-title">Get started here</h1>
    <h2 style="font-size: 15px; color: grey;"> Fill out our innovation form</h2>
      <form className="idea-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>

        <div className="input-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>

        <div className="input-group">
          <label htmlFor="contact">Email Address or Phone Number:</label>
          <input type="text" id="contact" name="contact" required />
        </div>

        <div className="input-group">
          <label htmlFor="submissionType">Submission Type:</label>
          <select id="submissionType" name="submissionType" onChange={handleSubmissionTypeChange} value={submissionType}>
            <option value="text">Text</option>
            <option value="video">Video</option>
          </select>
        </div>

        {submissionType === 'video' && (
          <div className="input-group">
            <label htmlFor="videoUpload">Upload Video:</label>
            <input type="file" id="videoUpload" name="videoUpload" accept="video/*" onChange={handleFileChange} />
          </div>
        )}

        {submissionType === 'text' && (
          <div className="input-group">
            <label htmlFor="ideaText">Describe Your Idea (max 250 words):</label>
            <textarea id="ideaText" name="ideaText" maxLength="250" value={idea} onChange={handleIdeaChange} />
          </div>
        )}

        <div className="input-group">
          <label htmlFor="areaOfFocus">Area of Focus:</label>
          <select id="areaOfFocus" name="areaOfFocus">
            <option value="transportation">Transportation and Energy</option>
            <option value="greenBuildings">Green Buildings</option>
            <option value="waterconservation"> Water Conservation</option>
            <option value=""> </option>
            <option value=""> </option>
            <option value=""> </option>
   
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

