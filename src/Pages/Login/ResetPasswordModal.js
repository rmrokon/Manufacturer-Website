import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const ResetPasswordModal = () => {
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const handlePasswordReset = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
        }
        else {
            alert("Please put your email first")
        }
    }

    if (sending) {
        return <Loading></Loading>
    }

    return (
        <div>
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <label for="my-modal" class="btn btn-primary btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg mb-4">Reset Password</h3>
                    <p>We will send a password reset email to your email address.</p>
                    {
                        error && <p>{error.message}</p>
                    }
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Your Email" class="input input-bordered w-full max-w-xs" name="email" value={email} required />
                    <div class="modal-action">
                        <label onClick={handlePasswordReset} class="btn text-white btn-primary">Send Email</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordModal;