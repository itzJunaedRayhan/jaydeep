import React from 'react';
import Menubar from '../Home/Menubar/Menubar';
import './CreateAccount.css'

const CreateAccount = () => {
    return (
        <div className='createAccountWrapper'>
            <Menubar/>
			<div className="Contact-Wrapper">
				<form action="" className="RegistrationForm">
					<h3>Registration Form</h3>
                    <div className="form-wrapper">
                        <input type="text" className="form-control firstName" placeholder="First Name:" />
					</div>
                    <div className="form-wrapper">
                        <input type="text" className="form-control lastName" placeholder="Last Name:" />
					</div>
					<div className="form-wrapper">
						<input type="text" className="form-control username" placeholder="Username:" />
					</div>
					<div className="form-wrapper">
						<input type="text" className="form-control email" placeholder="Email:" />
					</div>
					<div className="form-wrapper">
						<input type="number" className="form-control phone" placeholder="Phone Number:" />
					</div>
					<div className="form-wrapper">
						<input type="password" className="form-control password" placeholder="Password:" />	
					</div>
					<div className="form-wrapper">
						<input type="password" className="form-control confirmPassword" placeholder="Confirm Password:" />	
					</div>
					<div className="checkbox">
						<label>
							<input type="checkbox" className="terms" /> I caccept the Terms of Use & Privacy Policy.
							<span className="checkmark"></span>
						</label>
					</div>
					<button type="submit" className="submitBtn">Register Now</button>
				</form>
			</div>
        </div>
    );
};

export default CreateAccount;