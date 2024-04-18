import React from 'react';

function Login() {
    

    return (
       <div className='container text-center'>
        <form method='post'>
            <h1 className='mt-5'>Login</h1>
            <div className='mt-5'>
                <div className='col-sm-6 offset-sm-3 col-xs-12 mt-4'>
                    <input type='text' className='form-control' placeholder = "Enter a name" required />
                </div>
                <div className='col-sm-6 offset-sm-3 col-xs-12 mt-4'>
                    <input type='text' className='form-control' placeholder = "Enter password" required />
                </div>
            </div>
            <div className='mt-2'>
                <button type='submit' className='btn btn-success'> Login</button>
            </div>

        </form>
       </div>
    )
}
export default Login;
