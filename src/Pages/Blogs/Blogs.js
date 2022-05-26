import React from 'react';

const Blogs = () => {
    return (
        <div className='p-12'>
            <h3 className='text-3xl font-bold text-center my-12'>QnA</h3>
            <div>
                <h1 className='text-xl font-bold text-accent'>1. How will you improve the performance of a React Application?</h1>
                <h3 className='text-lg text-accent my-4'>There are many ways we can optimize a React App. We can install the React Dev Tool and get optimization idea from the Profiler. Besides, we can optimize our image size used in the App. Instead of writing code in a single page we can saparate components and use import() to integrate them.</h3>
            </div>

            <div>
                <h1 className='text-xl font-bold text-accent'>2. What are the different ways to manage a state in a React application?</h1>
                <h3 className='text-lg text-accent my-4'>We can use the build in useState function. Or we can use third party state management library like React Query or Redux.</h3>
            </div>

            <div>
                <h1 className='text-xl font-bold text-accent'>3. How does prototypical inheritance work?</h1>
                <h3 className='text-lg text-accent my-4'>Prototypical inheritance lets a child object inherit the properties and methods of a parent object. It let's objects share, extend and copy their methods.</h3>
            </div>

            <div>
                <h1 className='text-xl font-bold text-accent'>4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h1>
                <h3 className='text-lg text-accent my-4'>If we set the the value of products directly, we will not be able to track the state of it. We will not be able change the value of it dynamically like we can do it with setProducts function.</h3>
            </div>

            <div>
                <h1 className='text-xl font-bold text-accent'>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <h3 className='text-lg text-accent my-4'>I will take declare a state of product first. Then I'll take an input field and set an onChange or onBlur in it. onBlur or onChange I will take the value to of the input in a variable, may be called inputText. There will be a button and onClick I will loop through the given array using map function with a condition inside it like if(product.name === inputText) setProduct(product).</h3>
            </div>

            <div>
                <h1 className='text-xl font-bold text-accent'>6. What is a unit test? Why should write unit tests?</h1>
                <h3 className='text-lg text-accent my-4'>Unit test is one kind of software testing. Using it we can test invidual components reffered as units. We should write unit test because it let's us keep the design of the software in mind so that we can think through it. Also it gives an idea about what we need to do before start writing the code. Which basically helps us stay focused.</h3>
            </div>
        </div>
    );
};

export default Blogs;