import React, { useState} from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import './CreateAccount.css'

const CreateAccount = (id) => {

    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password, setPassword] = useState('');
    const today = new Date();
    const createdAt = `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`;
    const navigate = useNavigate();

    const validationSchema = yup.object().shape({
        password: yup.string()
            .required('Passwort muss angegeben sein'),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password')], 'Passwörter stimmen nicht überein')

    });

    const formOptions = { resolver: yupResolver(validationSchema)}

    const { register, handleSubmit, formState} = useForm(formOptions);
    const {errors } = formState;

    const onSubmit = () => {

            const account = { name, email, password, createdAt}

            fetch('http://localhost:8000/users', {
                
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(account)
            }).then(() => {
                navigate("/LogIn")
                
            })
    }

    return(
        <div className="register-form">
            <div className="register-in-box">
            <h2>Ertsellen Sie einen Account:</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                    <label>Name</label><br/>
                    <input
                        className='inputRegi'
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /><br/>
                </div>
                <div className="field">
                    <label>Email</label><br/>
                    <input
                        className='inputRegi'
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                /><br/>
                </div>
                <div className="field">
                <label>Passwort</label><br/>
                        <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                <div className="field">
                <label className='inputRegi'>Passwort bestätigen</label><br/>
                            <input name="confirmPassword" type="password" {...register('confirmPassword')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
                </div>
                <button type="submit">Account erstellen</button>
            </form>
            </div>
        </div>
    )
}
export default CreateAccount;
