/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";

const containerStyle = css`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const headerStyle = css`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const formStyle = css`
  display: grid;
  gap: 16px;
`;

const selectStyle = css`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  appearance: none;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const labelStyle = css`
  font-weight: bold;
  margin-bottom: 4px;
  display: block;
`;

const buttonStyle = css`
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  width: 100%;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const GridInputForm = () => {
  const [formData, setFormData] = useState({
    gender: "",
    country: "",
    state: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
  };

  const countries = ["United States", "Russia", "India"];

  return (
    <div css={containerStyle}>
      <h1 css={headerStyle}>Input Form for School Admission</h1>
      <form onSubmit={handleSubmit} css={formStyle}>
        <div>
          <label htmlFor="gender" css={labelStyle}>
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            css={selectStyle}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="country" css={labelStyle}>
            Country
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            css={selectStyle}
            required
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country.toLowerCase()}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="state" css={labelStyle}>
            State
          </label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            css={selectStyle}
            required
          >
            <option value="">Select State</option>
            <option value="california">California</option>
            <option value="texas">Texas</option>
            <option value="new-york">New York</option>
          </select>
        </div>

        <div>
          <button type="submit" css={buttonStyle}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GridInputForm;
