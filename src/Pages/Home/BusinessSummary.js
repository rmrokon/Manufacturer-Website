import React from 'react';
import { DocumentReportIcon, GlobeAltIcon, LibraryIcon, UserGroupIcon } from '@heroicons/react/solid'

const BusinessSummary = () => {
    return (
        <div className='p-5'>
            <h3 className='text-3xl text-center font-bold text-primary my-5'>Why Trust Us?</h3>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 place-items-center'>

                <div class="card w-64 bg-base-100 shadow-xl">
                    <div class="card-body items-center">
                        <h2 class="card-title text-5xl">85+</h2>
                        <p className='text-2xl'>Warehouses</p>
                    </div>
                    <figure><LibraryIcon className='text-primary h-32'></LibraryIcon></figure>
                </div>
                <div class="card w-64 bg-base-100 shadow-xl">
                    <div class="card-body items-center">
                        <h2 class="card-title text-5xl">50+</h2>
                        <p className='text-2xl'>Countries</p>
                    </div>
                    <figure><GlobeAltIcon className='text-primary h-32'></GlobeAltIcon></figure>
                </div>
                <div class="card w-64 bg-base-100 shadow-xl">
                    <div class="card-body items-center">
                        <h2 class="card-title text-5xl">340+</h2>
                        <p className='text-2xl'>Distributors</p>
                    </div>
                    <figure><UserGroupIcon className='text-primary h-32'></UserGroupIcon></figure>
                </div>
                <div class="card w-64 bg-base-100 shadow-xl">
                    <div class="card-body items-center">
                        <h2 class="card-title text-5xl">500+</h2>
                        <p className='text-2xl'>Reviews</p>
                    </div>
                    <figure><DocumentReportIcon className='text-primary h-32'></DocumentReportIcon></figure>
                </div>
            </div>
            <div class="card w-full bg-base-100 shadow-xl my-5 items-center">
                <div class="card-body">
                    <h2 class="card-title text-3xl text-center">Still Confused!</h2>
                    <p className='text-xl'>Read some amazing reviews given by our regular clients.</p>
                    <div class="card-actions justify-center">
                        <button class="btn btn-primary text-white">Reviews</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;