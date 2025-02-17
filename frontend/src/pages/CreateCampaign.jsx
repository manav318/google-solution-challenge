import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    campaignName: "",
    location: "",
    campaignCode: "",
    campaignGoal: "",
    startDate: "",
    endDate: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCancel = () => {
    setFormData({
      campaignName: "",
      location: "",
      campaignCode: "",
      campaignGoal: "",
      startDate: "",
      endDate: "",
      category: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="page-container">
      <h1>Create Campaign</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-section">
          <div className="section-left">
            <div className="form-group">
              <label>Campaign Name</label>
              <input
                type="text"
                name="campaignName"
                value={formData.campaignName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>6-Digit Campaign Code</label>
              <input
                type="text"
                name="campaignCode"
                value={formData.campaignCode}
                onChange={handleChange}
                maxLength="6"
                required
              />
            </div>
            <div className="form-group">
              <label>Campaign Goal</label>
              <input
                type="text"
                name="campaignGoal"
                value={formData.campaignGoal}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="section-right">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="finance">Finance</option>
                <option value="education">Education</option>
                <option value="health">Health</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-actions">
          <button type="submit" className="create-button">
            Create
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;