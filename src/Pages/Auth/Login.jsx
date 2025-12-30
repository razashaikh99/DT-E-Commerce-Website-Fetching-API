import React from 'react'
import Input from '../../Components/Input'
import Button from '../../Components/Button'

export default function Login() {
    return (
        <div className="pt-30 pb-16">
            <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='contact-card bg-white rounded-2xl p-8 shadow-lg'>
                    <h2 className='text-3xl font-bold text-gray-900 mb-6 text-center'>Login</h2>
                    <Input
                        className="!my-3"
                        label="Email Address"
                        type="email"
                        placeholder="razashaikh@gmail.com"
                    />
                    <Input
                        className="!mb-6"
                        label="Password"
                        type="password"
                    />
                    <Button
                        type="submit"
                        text="Login"
                    />

                </div>
            </div>
        </div>
    )
}
