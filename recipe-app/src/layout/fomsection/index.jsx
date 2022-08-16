import React from "react";
import { util, interaction } from "../../component/ComponentBarrel";
import { Link } from "react-router-dom";


export const FormSection = ({sign})=>{

    // form action
const handclick = (e)=>{
    e.preventDefault()
}

    return(
        <>
                <div className="form_section">
                    <div className="form-section_container">
                        <div className="aside_section">
                            <h1>Great Recipes</h1>
                        </div>
                        <form onSubmit={handclick} className="form-field">
                            <div className="input-container">
                                <input type="text" required/>
                                <span>First Name</span>
                            </div>
                            <div className="input-container">
                                <input type="text" required = 'required' />
                                <span>Last Name</span>
                            </div>
                            <div className="input-container">
                                <input type="email" required/>
                                <span className="email">Email</span>
                            </div>
                            <div className="input-container">
                                <input type="password" required/>
                                <span>Password</span>
                            </div>
                            {/* <interaction.Button class='submit-btn' label={sign} /> */}
                            <interaction.Button label={sign}/>
                            <p>Already have an account? <Link to='/'>Login</Link></p>
                        </form>
                        {/* <form className="form-field">
                            <input type="text" required/>
                            <label for="firstname" className="placeholder">First Name</label>
                            <input type="text" required/>
                            <label for="lastname" className="placeholder">Last Name</label>
                            <input type="email" required/>
                            <label for="Email" className="placeholder">Email</label>
                            <input type="password" required/>
                            <label for="password" className="placeholder">password</label>
                            <interaction.Button class='register-btn' label={sign} />
                        </form> */}
                    </div>
                </div>
        </>
    )
}