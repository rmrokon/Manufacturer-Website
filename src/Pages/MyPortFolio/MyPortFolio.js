import { ArrowRightIcon, ChartSquareBarIcon, DocumentTextIcon, DotsCircleHorizontalIcon, LinkIcon } from '@heroicons/react/solid';
import React from 'react';
import rokon from '../../assets/images/Rokon.png';

const MyPortFolio = () => {
    return (
        <div className='flex justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={rokon} alt="" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Md.Roknuzzaman</h2>
                    <p>mdrokon7773@gmail.com</p>

                    <p><span className='font-bold'>Eduation:</span> BSc. in ETE from Daffodil International University</p>

                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body mt-5">
                    <h3 className='font-bold'>Skills:</h3>

                    <div className='flex justify-center'>
                        <ul>
                            <li className='flex items-center'><ArrowRightIcon className='w-5 h-5'></ArrowRightIcon><p>JavaScript</p></li>
                            <li className='flex items-center'><ArrowRightIcon className='w-5 h-5'></ArrowRightIcon><p>React.js</p></li>
                            <li className='flex items-center'><ArrowRightIcon className='w-5 h-5'></ArrowRightIcon><p>Node.js</p></li>
                            <li className='flex items-center'><ArrowRightIcon className='w-5 h-5'></ArrowRightIcon><p>ExpressJs</p></li>
                            <li className='flex items-center'><ArrowRightIcon className='w-5 h-5'></ArrowRightIcon><p>MongoDB</p></li>
                            <li className='flex items-center'><ArrowRightIcon className='w-5 h-5'></ArrowRightIcon><p>HTML5</p></li>
                            <li className='flex items-center'><ArrowRightIcon className='w-5 h-5'></ArrowRightIcon><p>Bootstrap</p></li>
                            <li className='flex items-center'><ArrowRightIcon className='w-5 h-5'></ArrowRightIcon><p>TailwindCSS</p></li>
                        </ul>
                    </div>
                    <h3 className='font-bold'>Projects:</h3>
                    <div className='bg-gray-100 p-2 rounded-lg'>
                        <div className='border rounded-lg p-2 my-2 bg-white'>
                            <h3 className='flex items-center'><DocumentTextIcon className='w-5 h-5'></DocumentTextIcon><p>iManage24 - Warehouse Management Website</p></h3>

                            <h3 className='flex items-center mt-2 text-blue-600'><LinkIcon className='w-5 h-5'></LinkIcon><p><a href="https://imanage24-9aeab.web.app">Visit live site</a></p></h3>
                        </div>

                        <div className='border rounded-lg p-2 my-2 bg-white'>
                            <h3 className='flex items-center'><DocumentTextIcon className='w-5 h-5'></DocumentTextIcon><p>Oral Care- Website for a Dentisit</p></h3>

                            <h3 className='flex items-center mt-2 text-blue-600'><LinkIcon className='w-5 h-5'></LinkIcon><p><a href="https://oral-care-55971.web.app/">Visit live site</a></p></h3>

                        </div>

                        <div className='border rounded-lg p-2 my-2 bg-white'>
                            <h3 className='flex items-center'><DocumentTextIcon className='w-5 h-5'></DocumentTextIcon><p>Gaming Gadget- Product Analysis Website</p></h3>

                            <h3 className='flex items-center mt-2 text-blue-600'><LinkIcon className='w-5 h-5'></LinkIcon><p><a href="https://gaming-gadget-review.netlify.app/">Visit live site</a></p></h3>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default MyPortFolio;