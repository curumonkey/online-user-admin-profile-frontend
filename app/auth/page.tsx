"use client";
import { GoogleLogin } from "@react-oauth/google";

export default function AuthPage() {
  async function handleGoogleLogin(credential: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: credential }),
    });
    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Login successful!");
    } else {
      alert("Login failed: " + JSON.stringify(data));
    }
  }

  return (
    <div className="p-6">
      <h1>Login with Google</h1>
      <GoogleLogin
        onSuccess={cred => {
          if (cred.credential) handleGoogleLogin(cred.credential);
        }}
        onError={() => alert("Google Login Failed")}
      />
    </div>
  );
}
