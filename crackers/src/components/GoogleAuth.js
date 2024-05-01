import React from "react";
import { GoogleOAuthProvider,  GoogleLogin } from '@react-oauth/google';





const GoogleAuth=()=>{
  return(
    <div
        style={{
               display:'flex',
               flex:2,
               height:'100vh',
               justifyContent:'center',
               alignItems:'center',
               backgroundColor:'white',
        }}
    >
       Hi There,Welcome To Muo Sigma Classes
       <GoogleOAuthProvider clientId="1062449077438-bpdul85l3mvp36rhqgptod06rcqpbm4c.apps.googleusercontent.com">
       <GoogleLogin
    onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
        </GoogleOAuthProvider>
    </div>
  )
}


export default GoogleAuth;