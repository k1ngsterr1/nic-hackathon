import React from 'react';
import Layout from "@/widgets/Layout/Layout";
import {LoginForm} from "@/features/auth/login";

const SignIn = () => {
    return (
        <div>
            <Layout>
                <LoginForm/>
            </Layout>
        </div>
    );
};

export default SignIn;
