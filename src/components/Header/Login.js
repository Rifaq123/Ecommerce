import React from 'react'
import "./signup.css";

const Login = () => {
  return (
    <>
              <div className="container-body">
        <div className="containersignup containerloginup">
          <div className="titlee">Login</div>
          <div className="content">
            <form action="#">
              <div className="user-details d-flex flex-column justify-content-center align-items-center " >
                {/* <div className="input-box">
                  <span className="details">Full Name</span>
                  <input type="text" placeholder="Enter your name" required />
                </div> */}
                {/* <div className="input-box">
                  <span className="details">Username</span>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    required
                  />
                </div> */}
                <div className="input-box w-100 ">
                  <span className="details">Email</span>
                  <input type="text" placeholder="Enter your email" required />
                </div>
               
                <div className="input-box w-100 mt-4">
                  <span className="details">Password</span>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                {/* <div className="input-box">
                  <span className="details">Confirm Password</span>
                  <input
                    type="text"
                    placeholder="Confirm your password"
                    required
                  />
                </div> */}
              </div>
              
              <div className="button">
                <input type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login