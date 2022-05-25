import React from 'react';
import { useForm } from 'react-hook-form';
import axiosPrivate from '../../interceptor/axiosPrivate';

const AddAProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageAPIkey = "ba174ce3bc57048f9cd66363c4b7ddfe";


    const handleAddProduct = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageAPIkey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result?.data.url;
                    const product = {
                        productName: data.name,
                        description: data.description,
                        price: data.price,
                        min_order: data.minQuantity,
                        quantity: data.quantity,
                        img
                    }

                    axiosPrivate.post("http://localhost:5000/addProduct", product).then(res => console.log(res));
                }
            })



        // console.log(image);

    }

    return (
        <div className='flex justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl text-accent text-center font-bold">Add a Product</h2>
                    <div>
                        <form action="" className='flex flex-col items-center' onSubmit={handleSubmit(handleAddProduct)}>

                            <input type="text" name='name' placeholder="Product Name" className="input w-full  mb-2 select-bordered" {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required"
                                },
                            })} />

                            <p>{errors?.name?.type === "required" && <span className='text-red-400'>{errors?.name?.message}</span>}</p>

                            <textarea type="text" name='description' placeholder="Description" className="input w-full  mb-2 select-bordered" {...register("description", {
                                required: {
                                    value: true,
                                    message: "Description is required"
                                }
                            })} />

                            <p>{errors?.email?.type === "required" && <span className='text-red-400'>{errors?.description?.message}</span>}</p>

                            <input type="number" name='quantity' placeholder="Quantity" className="input w-full mb-2 select-bordered" {...register("quantity", {
                                required: {
                                    value: true,
                                    message: "Quantity is required."
                                },
                            })} />

                            <p>{errors?.quantity?.type === "required" && <span className='text-red-400'>{errors?.quantity?.message}</span>}</p>

                            <input type="number" name='minQuantity' placeholder="Min Order Quantity" className="input w-full mb-2 select-bordered" {...register("minQuantity", {
                                required: {
                                    value: true,
                                    message: "Minimum order quantity is required."
                                },
                            })} />

                            <p>{errors?.minQuantity?.type === "required" && <span className='text-red-400'>{errors?.minQuantity?.message}</span>}</p>

                            <input type="number" name='price' placeholder="Price" className="input w-full mb-2 select-bordered" {...register("price", {
                                required: {
                                    value: true,
                                    message: "Price is required."
                                },
                            })} />

                            <p>{errors?.price?.type === "required" && <span className='text-red-400'>{errors?.price?.message}</span>}</p>

                            <input type="file" name='image' className="input w-full mb-2 select-bordered" {...register("image", {
                                required: {
                                    value: true,
                                    message: "Image is required."
                                },
                            })} />

                            <input className='btn btn-primary text-white font-bold bg-accent w-full mt-2' type="submit" value="Add Product" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAProduct;