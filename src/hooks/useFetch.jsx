import { useState } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogle = async (response) => {
  setLoading(true);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
        "Cross-Origin-Embedder-Policy": "require-corp"
      },
      body: JSON.stringify({ credential: response.credential }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! at ${url} Status: ${res.status}`);
    }

    const data = await res.json();

    if (data?.user) {
      localStorage.setItem("user", JSON.stringify(data?.user));
      window.location.reload();
    } else {
      throw new Error(data?.message || "Login failed.");
    }
  } catch (error) {
    setError(error.message || "An error occurred during login.");
  } finally {
    setLoading(false);
  }
};
  return { loading, error, handleGoogle };
};

export default useFetch;