import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";



// https://developers.google.com/identity/gsi/web/reference/js-reference

const Login = () => {
  const { handleGoogle, loading, error } = useFetch(
    "http://localhost:3000/login"
  );

  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: '343683636361-d959hsd0afqb7f5rhn9baglavsjgvs9u.apps.googleusercontent.com',
        callback: handleGoogle,
      });

      google.accounts.id.renderButton(document.getElementById("loginDiv"), {
        theme: "white",
        text: "signin_with",
        shape: "pill",
      });

      // google.accounts.id.prompt()
    }
  }, [handleGoogle]);

  return (
    <>
    <br></br>
      <header style={{ textAlign: "center" }}>
        <h1>Log in to continue</h1>
      </header>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {error && <p style={{ color: "red" }}>{error}</p>}
        {loading ? <div>Loading....</div> : <div id="loginDiv"></div>}
      </main>
      <footer> <nav style={{ padding: "2rem" }}>
        <Link style={{display:"flex", justifyContent: "center",
          flexDirection: "column",
          alignItems: "center", textDecoration: "none"}} to="/">Go Back</Link>
      </nav></footer>
    </>
  );
};

export default Login;