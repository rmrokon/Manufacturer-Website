import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Need something custom?</h1>
                        <p class="py-6">Put your email and write what you need! We provide custom design service too.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <textarea class="textarea textarea-bordered" placeholder="Write your requirements here"></textarea>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary text-white">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;