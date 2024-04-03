"use client"

import {Button, Input} from "@/shared/ui";
import Image from "next/image";
import '@/features/auth/signup/ui/signup.scss'
import {useState} from "react";
import {useAppDispatch} from "@/shared/lib/_react-hooks";
import {login} from "@/features/auth/login/model/login";
import {router} from "next/client";

const LoginForm = () => {
    const dispatch = useAppDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleLogin = async (e: any) => {
        e.preventDefault()

        try {
            const action = await dispatch(login({email_address: email, password: password}))
            if (login.fulfilled.match(action)) {
                await router.push("/")
            } else {
                return action.error.message
            }

        } catch (e) {

        }
    }
    return (
        <div className="signup ">
            <div className="signup__form p-8">
                <div>
                    <h2 className="signup__title">Signup</h2>
                    <p>Do not have an account,
                        <span className='signup__login'>
                            create a new one.
                      </span>
                    </p>
                </div>
                <form action="">
                    <div className="flex flex-col flex-wrap gap-y-5 mt-8">
                        <div>
                            <label htmlFor="">Email</label>
                            <div
                                className='flex justify-center items-center rounded-[15px] border border-white'>
                                <Input
                                    name="email"
                                    value={email}
                                    onChange={prev => setEmail(prev.target.value)}
                                    required
                                    autoComplete="new-password"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Password</label>
                            <div
                                className='flex justify-center items-center rounded-[15px] border border-white'>
                                <Input
                                    name="password"
                                    value={password}
                                    onChange={prev => setPassword(prev.target.value)}
                                    required
                                    autoComplete="new-password"
                                    type="password"
                                />
                            </div>
                        </div>
                    </div>
                </form>
                <div className="mt-8">
                    <Button onClick={handleLogin} size="lg" fullwidth>Login</Button>
                </div>
            </div>
            <Image width={720} height={716} src={new URL('@/shared/assets/img/loginForm.png', import.meta.url).href}
                   alt=""/>
        </div>

    )
}

export default LoginForm;
