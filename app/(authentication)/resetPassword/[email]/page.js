import React from 'react'
import ResetPassword from './components/ResetPassword';

const page = async ({ params }) => {
                    const { email } = await params;
                    const decodedString = decodeURIComponent(email)

                    return <><ResetPassword Email={decodedString}></ResetPassword></>

}

export default page