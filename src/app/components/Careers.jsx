"use client"
import React, { use, useEffect, useState } from 'react'
import { TextField, MenuItem, InputAdornment, Typography, createTheme, ThemeProvider, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { RiBriefcaseLine, RiMapPin2Fill, RiStarFill, RiUser3Fill } from 'react-icons/ri';

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiFilledInput-root": {
            color: "white",
            backgroundColor: "#1d1815",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            "&:hover": {
              backgroundColor: "#2a2521",
            },
            "&.Mui-focused": {
              backgroundColor: "#1d1815",
            },
            "&::before": {
              borderBottom: "1px solid white",
            },
            "&:hover:not(.Mui-disabled)::before": {
              borderBottom: "2px solid black",
            },
            "&::after": {
              borderBottom: "2px solid red",
            },
          },
          "& .MuiInputLabel-root": {
            color: "white",
            "&.Mui-focused": {
              color: "white",
            },
          },
          "& .MuiSelect-select": {
            color: "white",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            backgroundColor: "#1D1815",
          },
          "& .MuiMenu-paper": {
            backgroundColor: "#1D1815",
          },
          "& .MuiMenuItem-root": {
            color: "#F5F5F5",
            "&:hover": {
              backgroundColor: "#1C1F24",
            },
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1D1815', // Dropdown background color
        },
        list: {
          color: '#F5F5F5', // Text color of dropdown items
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#F5F5F5', // Dropdown item text color
          '&:hover': {
            backgroundColor: '#1C1F24', // Hover effect color
          },
        },
      },
    }
  },
});

const Careers = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [cob, setCob] = useState("");
  const [ciob, setCiob] = useState("");
  const [cnic, setCnic] = useState('');
  const [cnicExp, setCnicExp] = useState("");
  const [maritalStatus, setMaritalStatus] = useState('');
  const [gender, setGender] = useState('');
  const [religion, setReligion] = useState("");
  const [disability, setDisability] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [refer, setRefer] = useState("");
  const [cityApply, setCityApply] = useState("");
  const [position, setPosition] = useState("");
  const [shift, setShift] = useState("");
  const [employment, setEmployment] = useState("");
  const [degree, setDegree] = useState("");
  const [majors, setMajors] = useState("");
  const [qualificationYear, setQualificationYear] = useState("");
  const [pot, setPot] = useState("");
  const [totalYearsOfExperience, setTotalYearsOfExperience] = useState("");
  const [recentPosition, setRecentPosition] = useState("");
  const [recentCompany, setRecentCompany] = useState("");
  const [Values, setValues] = useState(false);


  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => { cke() }, [checked])

  const cke = () => {
    if (name != "" && dob != "" && cob != "" && ciob != "" && cnic != "" && cnicExp != "" && maritalStatus != "" && gender != "" && religion != "" && disability != "" && phoneNumber != "" && address != "" && country != "" && province != "" && city != "" && refer != "" && cityApply != "" && position != "" && shift != "" && employment != "" && degree != "" && majors != "" && qualificationYear != "" && pot != "" && totalYearsOfExperience != "" && recentPosition != "" && recentCompany) {
      setValues(true)
    }
  }

  const stdfu = () => {
    console.log(name, dob, cob, ciob, cnic, cnicExp, maritalStatus, gender)
  }

  return (
    <>
      <div className="flex flex-col mt-10 h-full w-[90vw] mx-auto">
        <div className="flex items-center justify-center my-6">
          <h2 className='text-[42px] text-brand-secondary font-bold'>Careers</h2>
        </div>
      </div>
      <div className="container text-brand-secondary mx-auto mb-5">
        <div className="flex flex-wrap p-2 justify-around">
          <div className="w-full  md:w-2/3">
            <h5 className="text-[26px] font-semibold flex items-center">
              <RiUser3Fill fill='white' />&nbsp;&nbsp;Personnel Info
            </h5>
            <ThemeProvider theme={theme}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-9">
                <TextField
                  id="name"
                  label="FULL NAME "
                  variant="filled"
                  name="name"
                  format="DD MM YYYY"
                  fullWidth
                  required
                  value={name}
                  onChange={(e) => {
                    const value = e.target.value;
                    setName(value);
                  }}
                />

                <TextField
                  id='dob'
                  label="Date of Birth "
                  variant="filled"
                  name="dob"
                  className='date bg-brand-darkGray rounded-t-xl'
                  type="date"
                  fullWidth
                  helperText={error && "Date of Birth is required."}
                  required
                  value={dob}
                  onChange={(event) => {
                    const value = event.target.value;
                    setDob(value);
                    // Example validation (you can customize this)
                    if (!value) {
                      setError(true);
                    } else {
                      setError(false);
                    }
                  }}
                  InputLabelProps={{
                    shrink: true
                  }}
                />

                <TextField
                  id='cob'
                  label="Country of Birth"
                  variant="filled"
                  name="cob"
                  fullWidth
                  required
                  value={cob}
                  onChange={(e) => {
                    const value = e.target.value;
                    setCob(value);
                  }}
                />

                <TextField
                  id='ciob'
                  label="City of Birth "
                  variant="filled"
                  name="ciob"
                  fullWidth
                  required
                  value={ciob}
                  onChange={(e) => {
                    const value = e.target.value;
                    setCiob(value);
                  }}
                />

                <TextField
                  id='cnic'
                  label="CNIC "
                  variant="filled"
                  name="cnic"
                  type="text"
                  fullWidth
                  required
                  value={cnic}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Allow only non-numeric input and clearing input
                    if (!isNaN(value) && value.length <= 13) {  // Check if the input doesn't contain any digits
                      setCnic(value);   // Update state if no numbers are in the input
                    }
                  }}
                />

                <TextField
                  id='cnicExp'
                  label="CNIC Expiry Date "
                  variant="filled"
                  name="cnicExp"
                  type="date"
                  fullWidth
                  required
                  className='date bg-brand-darkGray rounded-t-xl'
                  helperText={error && "CNIC expiry is required."}
                  value={cnicExp}
                  onChange={(event) => {
                    const value = event.target.value;
                    setCnicExp(value);
                  }}
                  InputLabelProps={{
                    shrink: true
                  }}
                />

                <TextField
                  id="mar"
                  label="Marital Status "
                  variant="filled"
                  name="mar"
                  select
                  fullWidth
                  required
                  value={maritalStatus} // Set controlled value
                  onChange={(event) => {
                    setMaritalStatus(event.target.value); // Update state when an option is selected
                  }}
                >
                  <MenuItem value="single">Single</MenuItem>
                  <MenuItem value="married">Married</MenuItem>
                </TextField>

                <TextField
                  id='gender'
                  label="Gender"
                  variant="filled"
                  name="gender"
                  select
                  fullWidth
                  className='bg-brand-darkGray rounded-t-xl'
                  value={gender} // Set controlled value
                  onChange={(event) => {
                    setGender(event.target.value); // Update state when an option is selected
                  }}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </TextField>

                <TextField
                  id='religion'
                  label="Religion "
                  variant="filled"
                  name="religion"
                  fullWidth
                  required
                  value={religion}
                  onChange={(e) => {
                    const value = e.target.value;
                    setReligion(value);
                  }}
                />

                <TextField
                  id='disability'
                  label="Disability "
                  variant="filled"
                  name="disability"
                  fullWidth
                  required
                  value={disability}
                  onChange={(e) => {
                    const value = e.target.value;
                    setDisability(value);
                  }}
                />
              </div>
            </ThemeProvider>
          </div>
          <div className="w-full  md:w-2/3">
            <h5 className="text-[26px] font-semibold flex items-center">
              <RiMapPin2Fill />&nbsp;&nbsp;Address
            </h5>
            <ThemeProvider theme={theme}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-9">
                <TextField
                  id='phoneNumber'
                  label="Phone Number (3XXXXXXXXX)"
                  name='phoneNumber'
                  variant="filled"
                  fullWidth
                  type="text"
                  autoComplete="mobile tel"
                  value={phoneNumber}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    // Allow only numeric input that starts with '3' and is max 10 characters long
                    if (!isNaN(inputValue) && inputValue.startsWith("3") && inputValue.length <= 10) {
                      setPhoneNumber(inputValue);
                    } else if (!isNaN(inputValue) && inputValue === "3") {
                      setPhoneNumber(inputValue);
                    }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Typography
                          variant="body1"
                          sx={{
                            color: "white", // Replace with actual color if needed
                            fontWeight: "bold",
                            borderRight: "2px solid white",
                            paddingRight: "8px",
                            marginLeft: "4px",
                            marginTop: "4px",
                          }}
                        >
                          +92&nbsp;&nbsp;
                        </Typography>
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  id='address'
                  label="Address "
                  variant="filled"
                  name="address"
                  fullWidth
                  required
                  value={address}
                  onChange={(e) => {
                    const value = e.target.value;
                    setAddress(value);
                  }}
                />

                <TextField
                  id='country'
                  label="Country "
                  variant="filled"
                  name="country"
                  fullWidth
                  required
                  value={country}
                  onChange={(e) => {
                    const value = e.target.value;
                    setCountry(value);
                  }}
                />

                <TextField
                  id='prov'
                  label="State/Province "
                  variant="filled"
                  name="prov"
                  fullWidth
                  required
                  value={province}
                  onChange={(e) => {
                    const value = e.target.value;
                    setProvince(value);
                  }}
                />

                <TextField
                  id='city'
                  label="City "
                  variant="filled"
                  name="city"
                  fullWidth
                  required
                  value={city}
                  onChange={(e) => {
                    const value = e.target.value;
                    setCity(value);
                  }}
                />
              </div>
            </ThemeProvider>
          </div>
          <div className="w-full  md:w-2/3">
            <h5 className="text-[26px] font-semibold flex items-center">
              <RiBriefcaseLine />&nbsp;&nbsp;Job Posting
            </h5>
            <ThemeProvider theme={theme}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-9">
                <TextField
                  id='refer'
                  label="How were you refered to us? "
                  variant="filled"
                  name="refer"
                  fullWidth
                  required
                  value={refer}
                  onChange={(e) => {
                    const value = e.target.value;
                    setRefer(value);
                  }}
                />

                <TextField
                  id='cityApply'
                  label="City Applying For "
                  variant="filled"
                  name="cityApply"
                  fullWidth
                  required
                  value={cityApply}
                  onChange={(e) => {
                    const value = e.target.value;
                    setCityApply(value);
                  }}
                />

                <TextField
                  id='position'
                  label="Position You are Applying For "
                  variant="filled"
                  name="position"
                  fullWidth
                  required
                  value={position}
                  onChange={(e) => {
                    const value = e.target.value;
                    setPosition(value);
                  }}
                />

                <TextField
                  id='shift'
                  label="Type of Shift (Only for instore) "
                  variant="filled"
                  name="shift"
                  fullWidth
                  required
                  value={shift}
                  onChange={(e) => {
                    const value = e.target.value;
                    setShift(value);
                  }}
                />

                <TextField
                  id='employment'
                  label="Type of Employement (Only for instore) "
                  variant="filled"
                  name="employment"
                  fullWidth
                  required
                  value={employment}
                  onChange={(e) => {
                    const value = e.target.value;
                    setEmployment(value);
                  }}
                />
              </div>
            </ThemeProvider>
          </div>
          <div className="w-full  md:w-2/3">
            <h5 className="text-[26px] font-semibold flex items-center">
              Qualification
            </h5>
            <ThemeProvider theme={theme}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-9">
                <TextField
                  id='degree'
                  label="Degree "
                  variant="filled"
                  name="degree"
                  fullWidth
                  required
                  value={degree}
                  onChange={(e) => {
                    const value = e.target.value;
                    setDegree(value);
                  }}
                />

                <TextField
                  id='majors'
                  label="Majors "
                  variant="filled"
                  name="majors"
                  fullWidth
                  required
                  value={majors}
                  onChange={(e) => {
                    const value = e.target.value;
                    setMajors(value);
                  }}
                />

                <TextField
                  id='quailficationYear'
                  label="Qualification Year "
                  variant="filled"
                  name="quailficationYear"
                  fullWidth
                  required
                  value={qualificationYear}
                  onChange={(e) => {
                    const value = e.target.value;
                    setQualificationYear(value);
                  }}
                />

                <TextField
                  id='pot'
                  label="Place of Tuition "
                  variant="filled"
                  name="pot"
                  fullWidth
                  required
                  value={pot}
                  onChange={(e) => {
                    const value = e.target.value;
                    setPot(value);
                  }}
                />
              </div>
            </ThemeProvider>
          </div>
          <div className="w-full  md:w-2/3">
            <h5 className="text-[26px] font-semibold flex items-center">
              <RiStarFill />&nbsp;&nbsp;Experience
            </h5>
            <ThemeProvider theme={theme}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-9">
                <TextField
                  id='totalYearsOfExperience'
                  label="Total Years of Experience "
                  variant="filled"
                  name="totalYearsOfExperience"
                  fullWidth
                  required
                  value={totalYearsOfExperience}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^[\d.]*$/.test(value)) {
                      setTotalYearsOfExperience(value);
                    }
                  }}
                />

                <TextField
                  id='recentPosition'
                  label="Recent Position "
                  variant="filled"
                  name="recentPosition"
                  fullWidth
                  required
                  value={recentPosition}
                  onChange={(e) => {
                    const value = e.target.value;
                    setRecentPosition(value);
                  }}
                />

                <TextField
                  id='recentCompany'
                  label="Recent Company "
                  variant="filled"
                  name="recentCompany"
                  fullWidth
                  required
                  value={recentCompany}
                  onChange={(e) => {
                    const value = e.target.value;
                    setRecentCompany(value);
                  }}
                />
              </div>
            </ThemeProvider>
          </div>
          <div className="w-full  md:w-2/3">
            <h5 className="text-[42px] font-semibold flex justify-center items-center">
              Applicant agreement
            </h5>
            <p className="font-ftr my-9 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, perspiciatis explicabo ex dignissimos libero dolorum temporibus a nostrum sit, ipsa necessitatibus, consequatur deleniti? Voluptatem nulla saepe sapiente, totam vel corporis quaerat dolores suscipit obcaecati consectetur illo dolorum tempore nemo. Impedit, sit. Animi consectetur, quidem eaque obcaecati totam molestiae ratione beatae delectus unde nisi iste repellendus voluptate, quas sint qui vitae amet! Aperiam voluptatem totam delectus, rerum eligendi beatae ducimus. Deserunt odit temporibus quam, beatae autem perferendis vel aspernatur corrupti cumque asperiores culpa quas mollitia doloremque non facere sit et sint aliquam, distinctio laboriosam, porro ipsa unde officiis! Odit, voluptas saepe.
            </p>
          </div>
          <div className="w-full flex flex-col  md:w-2/3">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={(event) => {
                      setChecked(event.target.checked);
                    }}
                    sx={{
                      color: "#D71A28",
                      "&.Mui-checked": {
                        color: "#D71A28"
                      }
                    }}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                }
                label={
                  <Typography variant="body1" style={{ color: 'white' }}>
                    Sign up now to avail exclusive rewards &amp; discounts
                  </Typography>
                }
                labelPlacement="end"
              />
            </FormGroup>
            <button className={`my-9 rounded-lg text-[14px] font-lgbtn w-80 p-2 ${!Values ? "!bg-brand-inpnot cursor-not-allowed" : "bg-brand-primary cursor-pointer"} mx-auto`} disabled={!Values} onClick={stdfu}>APPLY</button>
          </div>
          {/* <button onClick={stdfu}>hdjhfjh</button> */}
        </div>
      </div>
    </>
  )
}

export default Careers
