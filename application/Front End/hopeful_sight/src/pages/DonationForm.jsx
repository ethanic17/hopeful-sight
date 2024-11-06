/**
 * DonationForm component for handling user donations and sign-ups
 * This form collects donation amount and user details like name, email, phone, and address
 * Once submitted, it navigates to a confirmation page
 */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "../components/AuthForm";
import { useSelector } from "react-redux";
import { DonationForm as DonateForm } from "../components/DonationForm";

/**
 * @typedef {Object} FormData
 *
 * The user's name
 * @property {string} name
 *
 * The user's email
 * @property {string} email
 *
 * The user's phone number in the format 100-100-1000
 * @property {string} phone
 *
 * The user's address
 * @property {string} address
 */

/**
 * The JSX form for donation and sign-up
 * @returns {JSX.Element}
 */
function DonationForm() {
  const [amount, setAmount] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.userInfo.loggedIn);
  /**
   * Updates the form data state when an input field changes
   *
   * The change event
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  /**
   * Handles form submission, prevents default action and navigates to confirmation
   *
   * The form submission event
   * @param {React.FormEvent} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    // We have the option to redirect this submission to the api
    navigate("/confirmation");
  };

  return <>{isLoggedIn ? <DonateForm /> : <AuthForm />}</>;
}

export default DonationForm;
