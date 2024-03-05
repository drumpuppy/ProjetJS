import React, { useState } from 'react';
import axios from 'axios';
import '../css/inscription.css'; // Ensure you've placed the corresponding CSS file in the appropriate directory

function Inscription() {
    const [userType, setUserType] = useState('');
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Update the URL to include the correct port number and ensure it points to your backend server
            await axios.post('http://localhost:4000/api/register', {
                titre: userType,
                prenom,
                nom,
                age,
                email,
                pwd: password,
            });
            // Handle success, consider redirecting the user to the login page or showing a success message
            alert('Account created successfully. Please login.');
        } catch (error) {
            console.error('Registration error:', error);
            setErrorMessage('There was an error registering your account. Please try again.');
        }
    };

    return (
        <div className="creation_compte">
            <h1>Je crée mon compte Doctobobo</h1>
            <form onSubmit={handleSubmit}>
            <div className="radio-group">
                    <label>
                        <input type="radio" name="titre" value="docteur" onChange={() => setUserType('docteur')} /> Docteur
                    </label>
                    <label>
                        <input type="radio" name="titre" value="patient" onChange={() => setUserType('patient')} /> Patient
                    </label>
                </div>
                <div>
                    <label>Votre prénom :</label>
                    <input type="text" placeholder="Jean" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
                </div>
                <div>
                    <label>Votre nom :</label>
                    <input type="text" placeholder="Dupont" value={nom} onChange={(e) => setNom(e.target.value)} required />
                </div>
                <div>
                    <label>Votre date de naissance :</label>
                    <input type="text" placeholder="18/03/1978" value={age} onChange={(e) => setAge(e.target.value)} required />
                </div>
                <div>
                    <label>Votre adresse email :</label>
                    <input type="email" placeholder="monadresse@mail.fr" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Votre mot de passe :</label>
                    <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <button type="submit">Création du compte</button>
                </div>
                {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            </form>
        </div>
    );
}

export default Inscription;