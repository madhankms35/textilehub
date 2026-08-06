// src/components/auth/RegisterForm.jsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",

        role: "buyer",

        companyName: "",
        gstNumber: "",
        businessAddress: "",

        terms: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));

    };

    const validate = () => {

        const newErrors = {};

        if (!formData.fullName.trim())
            newErrors.fullName = "Full name is required";

        if (!formData.email.trim())
            newErrors.email = "Email is required";

        if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Invalid email";

        if (!/^[0-9]{10}$/.test(formData.phone))
            newErrors.phone = "Enter valid phone number";

        if (formData.password.length < 8)
            newErrors.password = "Minimum 8 characters";

        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";

        if (formData.role === "supplier") {

            if (!formData.companyName.trim())
                newErrors.companyName = "Company name required";

            if (!formData.gstNumber.trim())
                newErrors.gstNumber = "GST required";

            if (!formData.businessAddress.trim())
                newErrors.businessAddress = "Business address required";
        }

        if (!formData.terms)
            newErrors.terms = "Accept terms";

        return newErrors;
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {

            setErrors(validationErrors);

            return;
        }

        navigate("/login");

    };

    return (

        <div className="card shadow-lg border-0 auth-card">

            <div className="card-body p-4">

                <h2 className="fw-bold mb-2">
                    Create Account
                </h2>

                <p className="text-muted mb-4">
                    Join TexoTrade Marketplace
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">

                        <label>Full Name</label>

                        <input
                            className="form-control"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                        />

                        <small className="text-danger">
                            {errors.fullName}
                        </small>

                    </div>

                    <div className="mb-3">

                        <label>Email</label>

                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <small className="text-danger">
                            {errors.email}
                        </small>

                    </div>

                    <div className="mb-3">

                        <label>Phone</label>

                        <input
                            className="form-control"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />

                        <small className="text-danger">
                            {errors.phone}
                        </small>

                    </div>

                    <div className="mb-3">

                        <label>Password</label>

                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />

                        <small className="text-danger">
                            {errors.password}
                        </small>

                    </div>

                    <div className="mb-3">

                        <label>Confirm Password</label>

                        <input
                            type="password"
                            className="form-control"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />

                        <small className="text-danger">
                            {errors.confirmPassword}
                        </small>

                    </div>

                    <div className="mb-4">

                        <label className="form-label">
                            Register As
                        </label>

                        <select
                            className="form-select"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                        >
                            <option value="buyer">
                                Buyer
                            </option>

                            <option value="supplier">
                                Supplier
                            </option>

                        </select>

                    </div>

                    {formData.role === "supplier" && (

                        <>

                            <div className="mb-3">

                                <label>Company Name</label>

                                <input
                                    className="form-control"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                />

                                <small className="text-danger">
                                    {errors.companyName}
                                </small>

                            </div>

                            <div className="mb-3">

                                <label>GST Number</label>

                                <input
                                    className="form-control"
                                    name="gstNumber"
                                    value={formData.gstNumber}
                                    onChange={handleChange}
                                />

                                <small className="text-danger">
                                    {errors.gstNumber}
                                </small>

                            </div>

                            <div className="mb-3">

                                <label>Business Address</label>

                                <textarea
                                    rows="3"
                                    className="form-control"
                                    name="businessAddress"
                                    value={formData.businessAddress}
                                    onChange={handleChange}
                                />

                                <small className="text-danger">
                                    {errors.businessAddress}
                                </small>

                            </div>

                        </>

                    )}

                    <div className="form-check mb-3">

                        <input
                            type="checkbox"
                            className="form-check-input"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                        />

                        <label className="form-check-label">
                            I agree to Terms & Conditions
                        </label>

                        <br />

                        <small className="text-danger">
                            {errors.terms}
                        </small>

                    </div>

                    <button
                        className="btn btn-primary w-100"
                    >
                        Register
                    </button>

                </form>

                <p className="text-center mt-4">

                    Already have an account?

                    <Link
                        to="/login"
                        className="ms-1"
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>

    );

};

export default RegisterForm;