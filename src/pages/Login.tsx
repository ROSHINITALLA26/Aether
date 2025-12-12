import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const nav = useNavigate();
  const loc = useLocation() as any;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await login(email, password);
      nav(loc.state?.from?.pathname || "/");
    } catch (err: any) {
      setError(err?.response?.data?.error || "Login failed");
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 pt-8">
      <div className="card p-8 w-full mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold mb-4">Welcome back 👋</h1>
        <p className="text-sm text-gray-600 mb-6">
          Sign in to your anonymous space
        </p>

        <form onSubmit={submit} className="space-y-4">
          <input
            className="w-full card px-4 py-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full card px-4 py-3"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <div className="text-sm text-red-500">{error}</div>}

          <button className="btn btn-primary w-full py-3 text-lg">
            Login
          </button>
        </form>

        <div className="text-sm text-gray-600 mt-6">
          New here?{" "}
          <Link to="/register" className="underline">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}