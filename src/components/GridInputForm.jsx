import React, { useState } from "react";
import {
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Typography,
  Container,
} from "@mui/material";

const GridInputFormWithSelect = () => {
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
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom align="center">
        Input Form for School Admission
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="country-label">Country</InputLabel>
              <Select
                labelId="country-label"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                {countries.map((country) => (
                  <MenuItem key={country} value={country.toLowerCase()}>
                    {country}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="state-label">State</InputLabel>
              <Select
                labelId="state-label"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              >
                <MenuItem value="california">California</MenuItem>
                <MenuItem value="texas">Texas</MenuItem>
                <MenuItem value="new-york">New York</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default GridInputFormWithSelect;
