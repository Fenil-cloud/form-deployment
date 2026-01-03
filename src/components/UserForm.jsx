import { useState } from "react";
import axios from "axios";
import "./UserForm.css";

function UserForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:13000/api/add",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("User added successfully:", response.data);
    } catch (error) {
      {
        console.error("Error adding user:", error);
        alert("Failed to add user. Please try again.");
      }
    }
  };
  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="first_name"
        placeholder="First Name"
        value={formData.first_name}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        value={formData.last_name}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="text"
        name="middle_name"
        placeholder="Middle Name"
        value={formData.middle_name}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default UserForm;
