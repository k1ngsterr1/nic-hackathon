import React from 'react';
import SignupForm from "@/features/auth/signup/ui/SignupForm";
import Layout from "@/widgets/Layout/Layout";

const Auth = () => {
    return (
        <div>
            <Layout>
                <SignupForm/>
            </Layout>
        </div>
    );
};

export default Auth;
