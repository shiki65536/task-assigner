import React, { useState } from 'react';
import './Signup.css';
import useSignup from '../hooks/useSignup';

function Signup() {
    const { signup, error } = useSignup();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [thumbnailError, setThumbnailError] = useState('')
    const [passError, setPassError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length < 6){
            setPassError('password should be at leat 6 characters')
        }
        signup(email, password, displayName, thumbnail);
    };
    const handleFile = (e) => {
        setThumbnail(null);

        let selected = e.target.files[0];
        if (!selected) {
            setThumbnailError('Please select a thubmail.')
            return;
        }
        if (!selected.type.includes('image')) {
            setThumbnailError('please slect a image file.')
            return;
        }
        if (selected.size > 500000) {
            setThumbnailError('Image file size must be less than 0.5Mb');
            return;
        }
        console.log(thumbnailError);
        setThumbnailError(null);
        setThumbnail(selected);
    };

    return (
        <div className='signup'>
            <section className='section'>
                <div className='page-title'>
                    <h3>Sign up</h3>
                </div>
                <div className='main'>
                    <form id='form' className='form-control' onSubmit={handleSubmit}>
                        <div className='error-msg'>{error}</div>

                        <label>
                            <span>Display Name</span>
                            <input
                                required
                                type='text'
                                onChange={(e) => setDisplayName(e.target.value)}
                                value={displayName}
                            />
                        </label>
                        <label>
                            <span>Email</span>
                            <input
                                required
                                type='email'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </label>
                        <label>
                            <span>Password</span>
                            {passError ? <span className="err-msg">{passError}</span> : null}
                            <input
                                required
                                type='password'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </label>
                        <label>
                            <span>Avatar</span>
                            {thumbnailError ? <span className="err-msg">{thumbnailError}</span> : null}
                            <input
                                required
                                type='file'
                                onChange={handleFile}
                            />
                        </label>

                        <button className='btn'>Sign up</button>

                    </form>
                </div>

            </section>
        </div>
    )
}

export default Signup