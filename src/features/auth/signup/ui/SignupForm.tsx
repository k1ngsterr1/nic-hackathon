"use client"
import {useAppDispatch} from "@/shared/lib/_react-hooks";
import {useState} from "react";
import {createUser} from "../model/singup";
import './signup.scss'
import {Button, Input} from "@/shared/ui";
import Image from "next/image";
import {router} from "next/client";

const SingUpForm = () => {
    const dispatch = useAppDispatch();
    const [values, setValues] = useState({
        username: '',
        password: '',
        email: '',
        phone: 0,
        name: '',
        lastname: '',
        card_number: 0
    })

    const handleChange = ({target: {value, name}}: any) => {
        setValues({...values, [name]: value})
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const isNotEmpty = Object.values(values).every((val) => val);

        if (!isNotEmpty) return;
        dispatch(createUser(values)).then((response: any) => {
           return router.push('/auth/sign-in')
        }).catch((error: any) => {
            console.error('Error:', error); // Логируем ошибку, если что-то пошло не так
        });
    }

    return (
        <div className="signup ">
            <div className="signup__form p-8">
                <div>
                    <h2 className="signup__title">Signup</h2>
                    <p>Already Have An Account,
                        <span className='signup__login'>
                          Login.
                      </span>
                    </p>
                </div>
                <form action="" onChange={handleChange}>
                    <div className="flex justify-between flex-wrap gap-y-5 mt-8">
                        <div>
                            <label htmlFor="">Username</label>
                            <div
                                className='flex justify-center items-center w-[290px] h-[61px] rounded-[15px] border border-white'>
                                <Input
                                    name="username"
                                    value={values.username}
                                    required
                                    autoComplete="new-password"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Email</label>
                            <div
                                className='flex justify-center items-center w-[290px] h-[61px] rounded-[15px] border border-white'>
                                <Input
                                    name="email"
                                    value={values.email}
                                    required
                                    autoComplete="new-password"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Phone</label>
                            <div
                                className='flex justify-center items-center w-[290px] h-[61px] rounded-[15px] border border-white'>
                                <Input
                                    name="phone"
                                    value={values.phone}
                                    required
                                    autoComplete="new-password"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Name</label>
                            <div
                                className='flex justify-center items-center w-[290px] h-[61px] rounded-[15px] border border-white'>
                                <Input
                                    name="name"
                                    value={values.name}
                                    required
                                    autoComplete="new-password"
                                    type="text"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="">LastName</label>
                            <div
                                className='flex justify-center items-center w-[290px] h-[61px] rounded-[15px] border border-white'>
                                <Input
                                    name="lastname"
                                    value={values.lastname}
                                    required
                                    autoComplete="new-password"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Card number</label>
                            <div
                                className='flex justify-center items-center w-[290px] h-[61px] rounded-[15px] border border-white'>
                                <Input
                                    name="card_number"
                                    value={values.card_number}
                                    required
                                    autoComplete="new-password"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Password</label>
                            <div
                                className='flex justify-center items-center w-[290px] h-[61px] rounded-[15px] border border-white'>
                                <Input
                                    name="password"
                                    value={values.password}
                                    required
                                    autoComplete="new-password"
                                    type="password"
                                />
                            </div>
                        </div>
                    </div>
                </form>
                <div className="flex gap-2 mt-4">
                    <input type="checkbox"/>
                    <p>I have read and agreed to the Terms of Service and Privacy Policy</p>
                </div>
                <div className="mt-8">
                    <Button onClick={handleSubmit} size="lg" fullwidth>Create Account</Button>
                </div>
            </div>
            <Image width={720} height={716} src={new URL('@/shared/assets/img/signUp.png', import.meta.url).href}
                   alt=""/>
        </div>

    )
}

export default SingUpForm;
