import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phoneNumber: ""
  });

  const [submittedData, setSubmittedData] = useState([]);
  const [editIndex, setEditIndex] = useState(null); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (form.checkValidity()) {
      if (editIndex !== null) {
        
        const updatedData = [...submittedData];
        updatedData[editIndex] = formData;
        setSubmittedData(updatedData);
        setEditIndex(null); // Reset editIndex
      } else {
        setSubmittedData([...submittedData, formData]);
      }
      setFormData({
        name: "",
        address: "",
        email: "",
        phoneNumber: ""
      });
    } else {
      form.reportValidity(); // Show validation messages
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      address: "",
      email: "",
      phoneNumber: ""
    });
    setEditIndex(null); 
  };

  const handleDelete = (index) => {
    const newData = submittedData.filter((_, i) => i !== index);
    setSubmittedData(newData);
  };

  
  const handleEdit = (index) => {
    const editedData = submittedData[index];
    setFormData(editedData);
    setEditIndex(index);
  };

  return (
    <div className="registration">
      <h2>Add Contact</h2>
      <hr />
      <form className="w" onSubmit={handleSubmit} noValidate>
        <div>
          Name:
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          Email:
          <br />
          <input
            type="email" // Use email 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          Phone Number:
          <br />
          <input
            type="tel" // Use tel type for phone number validation
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          Address:
          <br />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required // Mark as required field
          />
        </div>
        <br />
        <button className="btn btn-primary" type="submit">
          {editIndex !== null ? "Update" : "Submit"}
        </button>
        &nbsp;&nbsp;
        <button className="btn btn-secondary" type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
      <br />
      <table className="table">
        <tbody>
          {submittedData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phoneNumber}</td>
              <td>{data.address}</td>
              <td>
                <button className="btn btn-info" onClick={() => handleEdit(index)}>
                  Edit
                </button> &nbsp; &nbsp;
                <button className="btn btn-danger" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Registration;
