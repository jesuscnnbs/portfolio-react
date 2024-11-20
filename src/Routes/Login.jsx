import * as React from "react";
import { useSigninCheck } from "reactfire";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/logo_jesus.png";

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const { status } = useSigninCheck();
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      /** Validation TODO improve the validation */
      if (password.length < 6) {
        return setError("The password should have at least 6 characters");
      }
      if (!email.includes("@")) {
        return setError("The email is not valid");
      }

      setError("");
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (e) {
      setError(e.message);
    }
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col gap-0">
      <div className="avatar">
              <div className="w-32 rounded">
                <img src={avatar} />
              </div>
            </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>
            
            {error && <p className="text-error">{error}</p>}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input onChange={handleChangeEmail} type="email" placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input onChange={handleChangePassword} type="password" placeholder="Password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">
                {status === 'loading' && (
                  <span className="loading loading-spinner"></span>
                )}
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}