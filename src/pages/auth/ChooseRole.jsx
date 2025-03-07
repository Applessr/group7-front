import React from 'react'
import { useNavigate } from 'react-router-dom'

const ChooseRole = () => {
    const navigate = useNavigate();

    const handleRoleSelect = (role) => {
        if (role === 'student') {
            navigate('/authentication/login');
        } else if (role === 'employee') {
            navigate('/authentication/login-employee');
        } else {
            navigate('/');
        }
    }

    return (
        <div className='min-h-screen w-screen bg-white'>

            <div className='w-screen h-[7rem] flex items-center gap-6 pl-8 '>
                <div>
                    <img src="https://res.cloudinary.com/djudr1vzc/image/upload/v1730788865/Pierre_LOGO_rgsgob.png" alt="logo" className='w-[75px] ' />
                </div>
                <div>
                    <h1 className='text-3xl font-bold text-[#272988]'>Pierre University</h1>
                </div>
            </div>

            <div className='relative min-w-screen h-[45rem] flex flex-col justify-center items-center text-[#17174F]'
                style={{
                    backgroundImage: 'url(https://res.cloudinary.com/djudr1vzc/image/upload/v1730789153/campus2_rksdsf.jpg)',
                    backgroundSize: 'cover'
                }} >
                <div className='absolute inset-0 bg-white bg-opacity-25 backdrop-blur-sm'></div>

                <div className='absolute flex flex-col justify-center  gap-20 items-center'>
                    <h1 className='text-4xl font-bold'>Welcome to MyPierreUT</h1>
                    <h1 className='text-3xl mt-9 font-bold'>Choose Your Status</h1>
                    <div className='flex mt-6 space-x-4 gap-12 '>
                        <button
                            onClick={() => handleRoleSelect('student')}
                            className='shadow-xl p-4 px-8 bg-[#272988] text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold'
                        >
                            Student
                        </button>
                        <button
                            onClick={() => handleRoleSelect('employee')}
                            className='shadow-xl p-4 px-8 bg-[#272988] text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold'
                        >
                            Employee
                        </button>
                    </div>
                </div>
                <div className="min-h-[5rem] w-full"></div>
            </div>
        </div>
    )
}

export default ChooseRole