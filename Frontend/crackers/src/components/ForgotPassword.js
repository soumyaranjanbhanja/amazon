import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
import axios from "axios";
import { TextField, Button, CircularProgress } from "@material-ui/core";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [verified, setVerified] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const hanldeOtp = (e) => {
        setOtp(e.target.value);
    };

    const handleNewPassword = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:60000/api/users/forgotPassword", { email });
            if (response.status === 200) {
                setMessage("Check your email, OTP sent successfully.");
            }
        } catch (error) {
            console.error("Error in sending OTP:", error);
            setMessage("Error in sending OTP.");
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyPassword = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:60000/api/users/VerifyOtp", { email, otp });
            if (response.data === 200) {
                setMessage("OTP verified successfully.");
                setVerified(true);
            }
        } catch (error) {
            console.error("Error in verifying OTP:", error);
            setMessage("Error in verifying OTP.");
        } finally {
            setLoading(false);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (newPassword !== confirmPassword) {
                setMessage("Passwords do not match.");
                return;
            }
            const response = await axios.post("http://localhost:60000/api/users/resetPassword", { email, newPassword });
            if (response.data === 200) {
                setMessage("Password reset successfully.");
                navigate("/Login");
            }
        } catch (error) {
            console.error("Error in resetting password:", error);
            setMessage("Error in resetting password.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <p>{message}</p>
            {!verified && (
                <form onSubmit={handleForgotPassword}>
                    <h1>Forgot Password</h1>
                    <p>Please enter your email</p>
                    <TextField
                        type="email"
                        name="email"
                        value={email}
                        label="Email"
                        variant="outlined"
                        onChange={handleEmail}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" disabled={loading}>
                        {loading ? <CircularProgress size={24} /> : "Forgot Password"}
                    </Button>
                </form>
            )}
            {!verified && message && (
                <form onSubmit={handleVerifyPassword}>
                    {message}
                    <h1>Verify OTP</h1>
                    <p>Please enter the OTP sent to your email</p>
                    <TextField
                        type="text"
                        name="otp"
                        value={otp}
                        label="OTP"
                        variant="outlined"
                        onChange={hanldeOtp}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" disabled={loading}>
                        {loading ? <CircularProgress size={24} /> : "Verify OTP"}
                    </Button>
                </form>
            )}
            {verified && (
                <form onSubmit={handleResetPassword}>
                    {message}
                    <h1>Reset Password</h1>
                    <p>Enter your new password</p>
                    <TextField
                        type="password"
                        name="newPassword"
                        value={newPassword}
                        label="New Password"
                        variant="outlined"
                        onChange={handleNewPassword}
                        required
                    />
                    <TextField
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        label="Confirm Password"
                        variant="outlined"
                        onChange={handleConfirmPassword}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" disabled={loading}>
                        {loading ? <CircularProgress size={24} /> : "Reset Password"}
                    </Button>
                </form>
            )}
        </div>
    );
};

export default ForgotPassword;
