import React, { useState } from 'react';
import InputControl from '../InputControl/InputControl';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {Link, useNavigate} from "react-router-dom";
import {auth} from "../../firebase"
import styles from './Signup.module.css'

function Signup(){

    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
    });

    const [errorMsg, setErrormsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = () =>{
        if (!values.name || !values.email || !values.pass){
            setErrormsg("Fill all fields");
            return;
        }
        setErrormsg("");

        setSubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth, values.email, values.pass)
        .then(async(res)=>{
            setSubmitButtonDisabled(false);
            const user = res.user;
            await updateProfile(user,{displayName:values.name,});
            navigate("/");
        })
        .catch((err)=>{
            setSubmitButtonDisabled(false);
            setErrormsg(err, err.message);
        });
            
    }

    return(
        <div className={styles.container}>
        
            <div className={styles.innerBox}>
                <h1 className={styles.heading}>Sign up</h1>

                 <InputControl label  ="Name" placeholder= "Enter your Name" 
                    onChange= {event =>setValues((prev) => ({...prev, name: event.target.value}))}
                 />
                 <InputControl label  ="Email" placeholder= "Enter Your Email Adderss" 
                 onChange= {event =>setValues((prev) => ({...prev, email: event.target.value}))} />
                 <InputControl label  ="Password" placeholder= "Enter Your Password" 
                    onChange= {event =>setValues((prev) => ({...prev, pass: event.target.value}))}
                 />

                <div className={styles.footer}>
                <b className={styles.error}>{errorMsg}</b>
                    <button  disabled ={submitButtonDisabled} onClick ={handleSubmission}
                    >Signup</button>
                    <p>
                        Already have an account {" "}
                        <span>
                        <Link to="/login">
                        Login
                        </Link>
                        </span>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Signup