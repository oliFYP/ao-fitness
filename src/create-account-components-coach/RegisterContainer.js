import React, { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import db from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Country } from "country-state-city";
import Logo from "../img/Logo-black.png";

function RegisterContainer() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [hasNonNumericCharacters, setHasNonNumericCharacters] = useState(false);
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const auth = getAuth();

  const countryData = Country.getAllCountries();

  const [selectedCountry, setSelectedCountry] = useState(countryData[231].name);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(delayTimeout);
  }, []);

  const navigateToHome = () => {
    navigate("/");
  };

  const handleEmailChange = (event) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(event.target.value);
    setIsEmailValid(emailPattern.test(event.target.value));
  };

  const handlePasswordChange = (event) => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setPassword(event.target.value);
    setIsPasswordValid(passwordPattern.test(event.target.value));
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordsMatch(event.target.value === password);
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
    setHasNonNumericCharacters(value.match(/[^0-9]/) !== null);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const maxDOB = new Date();
  maxDOB.setFullYear(maxDOB.getFullYear() - 18);
  const maxDOBFormatted = maxDOB.toISOString().split("T")[0];

  async function handleSignUp() {
    const inputs = [
      { id: "name", label: "Name" },
      { id: "surname", label: "Surname" },
      { id: "gender", label: "Gender" },
      { id: "email", label: "Email" },
      { id: "dob", label: "Date of Birth" },
      { id: "phone", label: "Phone" },
      { id: "country", label: "Country" },
      { id: "city", label: "City" },
    ];

    const formData = {};
    for (const input of inputs) {
      const value = document.getElementById(input.id).value.trim();
      if (value === "") {
        alert(`Please provide a valid ${input.label}`);
        return;
      }
      formData[input.id] = value;
    }

    const { email } = formData;

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;

      delete formData.password;
      delete formData.confirmPassword;

      await addDoc(collection(db, "Coaches"), {
        ...formData,
      });

      console.log("User registered successfully:", user);
      navigate("/Dashboard");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email is already in use. Please use a different email.");
      } else {
        console.error("Error registering user:", error);
      }
    }
  }

  return (
    <div
      className="w-full md:w-1/2 bg-white text-black p-8 md:p-12"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={Logo}
            onClick={(e) => {
              navigateToHome(e);
            }}
            className="h-12 mt-1 sm:h-15 sm:mt-2 cursor-pointer"
          />
          <h2 className="select-none text-black text-center text-2xl mb-4 font-bold">
            Coach Sign up
          </h2>
        </div>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="select-none text-left block mb-2 text-black font-bold"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full  p-2 mb-4 bg-white border-b text-black focus:outline-none"
            placeholder="Enter your name"
          />

          <label
            htmlFor="surname"
            className="select-none text-left block mb-2 text-black font-bold"
          >
            Surname
          </label>
          <input
            type="text"
            id="surname"
            className="w-full  p-2 mb-4 bg-white border-b text-black focus:outline-none"
            placeholder="Enter your surname"
          />

          <label
            htmlFor="email"
            className={`select-none block text-left mb-2 font-bold ${
              isEmailValid ? "text-black" : "text-red-500"
            }`}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`w-full  p-2 mb-4 bg-white border-b text-black focus:outline-none ${
              isEmailValid ? "text-black" : "text-red-500"
            }`}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />

          <label
            htmlFor="password"
            className={`select-none block mb-2 text-left font-bold ${
              isPasswordValid ? "text-black" : "text-red-500"
            }`}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className={`w-full  p-2 mb-4 bg-white border-b text-black focus:outline-none ${
              isPasswordValid ? "text-black" : "text-red-500"
            }`}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
          <label
            htmlFor="confirmPassword"
            className={`select-none block text-left mb-2 font-bold ${
              passwordsMatch ? "text-black" : "text-red-500"
            }`}
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className={`w-full  p-2 mb-4 bg-white border-b text-black focus:outline-none  ${
              passwordsMatch ? "text-black" : "text-red-500"
            }`}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirm password"
          />
        </div>
        <div>
          <label
            htmlFor="gender"
            className="select-none block text-left mb-2 text-black font-bold"
          >
            Gender
          </label>
          <select
            id="gender"
            className="w-full  p-2 mb-4 bg-white border-b text-black"
            onChange={handleGenderChange}
            value={gender}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label
            htmlFor="dob"
            className="select-none block text-left mb-2 text-black font-bold"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            className="w-full  p-2 mb-4 bg-white border-b text-black "
            max={maxDOBFormatted}
          />

          <label
            htmlFor="phone"
            className={`select-none block text-left mb-2 font-bold ${
              hasNonNumericCharacters ? "text-red-500" : "text-black"
            }`}
          >
            Phone
          </label>

          <div className="flex">
            <PhoneInput
              inputProps={{
                name: "phone",
                id: "phone",
                required: true,
                autoFocus: false,
                style: {
                  width: "100%",
                  borderRadius: "0.25rem",

                  backgroundColor: "white",
                  color: "black",
                },
              }}
              country={"gb"}
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>

          <label
            htmlFor="country"
            className="select-none block text-left mb-2 mt-6 text-black font-bold"
          >
            Country
          </label>
          <select
            id="country"
            className="w-full  p-2 mb-4 bg-white border-b text-black "
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            {countryData.map((country, index) => (
              <option key={index} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>

          <label
            htmlFor="city"
            className="select-none block text-left mb-2 text-black font-bold"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            className="w-full  p-2 mb-4 bg-white border-b text-black focus:outline-none"
          />
        </div>
      </div>
      <div className="align-center">
        <div className="flex justify-center">
          <button
            onClick={() => {
              handleSignUp();
            }}
            type="submit"
            className="bg-black text-white font-bold py-2 px-10 rounded-3xl"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterContainer;
