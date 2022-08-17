import React, {useState} from "react";
import { util, interaction } from "../../component/ComponentBarrel";
import { Link } from "react-router-dom";


export const FormSection = ({sign})=>{

    // for first name input value
    const [firstName, setFirstName] = useState('');
    const firstNameValue = e =>setFirstName(e.target.value);

    // for lastName
    const [lastName, setLatName] = useState('');
    const lastNameValue = e => setLatName(e.target.value);

    // email
    const [email, setEmail] = useState('')
    const emailValue = e => setEmail(e.target.value);

    // password
    const [password, setPassword] = useState('')
    const passwordValue = e=> setPassword(e.target.value);


    // handlick button to safe the input value
    const Handclick = ()=>{
        firstNameValue('');
        lastNameValue('');
        emailValue('');
        passwordValue('');

    }
    // form action
const formAction = (e)=>{
    e.preventDefault()
}

    return(
        <>
                <div className="form_section">
                    <div className="form-section_container">
                        <div className="aside_section">
                            <h1>Great Recipes</h1>
                        </div>
                        <form onSubmit={formAction} className="form-field">
                            <div className="input-container">
                                <input type="text" required = 'required' value={firstName} onChange={firstNameValue} />
                                <span>First Name</span>
                            </div>
                            <div className="input-container">
                                <input type="text" required = 'required' value={lastName} onChange={lastNameValue} />
                                <span>Last Name</span>
                            </div>
                            <div className="input-container">
                                <input type="email" required = 'required' value={email} onChange={emailValue} />
                                <span className="email">Email</span>
                            </div>
                            <div className="input-container">
                                <input type="password" required = 'required' value={password} onChange={passwordValue} />
                                <span>Password</span>
                            </div>
                            {/* <interaction.Button class='submit-btn' label={sign} /> */}
                            <interaction.Button disabled={
                                     !firstName
                                     || !lastName 
                                     || !email 
                                     ||!password} 
                                     onclick={Handclick} 
                                     label={sign}
                                     />
                            <p>Already have an account? <Link to='/'>Login</Link></p>
                        </form>
                    </div>
                </div>
        </>
    )
}



// the mobile form 
export const MobileForm = ({sign})=>{
     // for first name input value
     const [firstName, setFirstName] = useState('');
     const firstNameValue = e =>setFirstName(e.target.value);
 
     // for lastName
     const [lastName, setLatName] = useState('');
     const lastNameValue = e => setLatName(e.target.value);
 
     // email
     const [email, setEmail] = useState('')
     const emailValue = e => setEmail(e.target.value);
 
     // password
     const [password, setPassword] = useState('')
     const passwordValue = e=> setPassword(e.target.value);
 
 
     // handlick button to safe the input value
     const Handclick = ()=>{
         firstNameValue('');
         lastNameValue('');
         emailValue('');
         passwordValue('');
 
     }
     // form action
 const formAction = (e)=>{
     e.preventDefault()
 }

    return (
        <>
            <div onSubmit={formAction} className="mobile-form">
                <form className="mobile-form-field">
                    <h2>Great Recipe Start From The Mind!</h2>
                    <div className="mobile-input-container">
                        <input type="text" required = 'required' placeholder="FirstName" value={firstName} onChange={firstNameValue} />
                    </div>
                    <div className="mobile-input-container">
                        <input type="text" required = 'required' placeholder="LastName" value={lastName} onChange={lastNameValue} />
                    </div>
                    <div className="mobile-input-container">
                        <input type="email" required = 'required' placeholder="Email" value={email} onChange={emailValue} />
                    </div>
                    <div className="mobile-input-container">
                        <input type="password" required = 'required' placeholder="Password" value={password} onChange={passwordValue} />
                    </div>
                    <Link to='/recipe'className="link" >
                        <interaction.Button disabled={
                                !firstName
                             || !lastName 
                             || !email 
                             ||!password} 
                             label={sign} 
                             onclick={Handclick}
                              />
                    </Link>
                    <p>Already have an account? <Link to='/'>Login</Link></p>
                </form>
            </div>
        </>
    )
}