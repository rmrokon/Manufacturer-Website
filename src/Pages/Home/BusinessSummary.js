import React from 'react';
import { ArrowDownIcon, DocumentReportIcon, GlobeAltIcon, LibraryIcon, UserGroupIcon } from '@heroicons/react/solid'

const BusinessSummary = () => {
    return (
        <div className='p-5'>
            <h3 className='text-3xl text-center font-bold text-primary my-5'>Why Trust Us?</h3>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 place-items-center'>

                <div className="card w-64 bg-base-100 shadow-xl">
                    <div className="card-body items-center">
                        <h2 className="card-title text-5xl">85+</h2>
                        <p className='text-2xl'>Warehouses</p>
                    </div>
                    <figure><LibraryIcon className='text-primary h-32'></LibraryIcon></figure>
                </div>
                <div className="card w-64 bg-base-100 shadow-xl">
                    <div className="card-body items-center">
                        <h2 className="card-title text-5xl">50+</h2>
                        <p className='text-2xl'>Countries</p>
                    </div>
                    <figure><GlobeAltIcon className='text-primary h-32'></GlobeAltIcon></figure>
                </div>
                <div className="card w-64 bg-base-100 shadow-xl">
                    <div className="card-body items-center">
                        <h2 className="card-title text-5xl">340+</h2>
                        <p className='text-2xl'>Distributors</p>
                    </div>
                    <figure><UserGroupIcon className='text-primary h-32'></UserGroupIcon></figure>
                </div>
                <div className="card w-64 bg-base-100 shadow-xl">
                    <div className="card-body items-center">
                        <h2 className="card-title text-5xl">500+</h2>
                        <p className='text-2xl'>Reviews</p>
                    </div>
                    <figure><DocumentReportIcon className='text-primary h-32'></DocumentReportIcon></figure>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl my-5">
                <div className="card-body flex items-center bg-primary">
                    <h2 className="card-title text-5xl text-white font-bold">Still Confused!</h2>
                    <p className='text-2xl font-bold text-white'>Read some amazing reviews given by our regular clients</p>
                    <p><ArrowDownIcon className='w-12 h-12 text-white'></ArrowDownIcon></p>

                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;