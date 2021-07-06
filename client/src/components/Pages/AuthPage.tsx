import Input from 'src/components/Input';
import Button from 'src/components/Button';
import FormSection from 'src/components/Styling/FormSection';
import PageSwitch from 'src/components/PageSwitch';
import { useHistory } from 'react-router';
import { useState } from 'react';

const AuthPage = () => {
    const history = useHistory();

    // Page State
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [pageToggle, setPageToggle] = useState<string>("Login");

    // Function pass to email input
    const getEmail = (input: string) => {
        setEmail(input);
    }

    // Funciton pass to password input
    const getPassword = (input: string) => {
        setPassword(input);
    }

    const pageToggler = () => {
        if (pageToggle === "Login") {
            setPageToggle("Register");
        } else {
            setPageToggle("Login");
        }
    }

    // Submit funcitons
    const LoginSubmit = ({email, password}: {email: string; password: string;}) => {
        history.push('/dashboard');
    }

    const SignUpSubmit = () => {
        console.log("button login");
    }

    if (pageToggle === "Login") {
        return (
            <div className="authpage-container">
                <div className="authpage-body authpage-header">
                    <i className="logo-large"/>
                    <h1>SWARMWATCH</h1>
                </div>
                <div className="authpage-body authpage-form">
                    <FormSection>
                        <PageSwitch selected={pageToggle} clickEvent={pageToggler}/>
                    </FormSection>
                    <FormSection>
                        <h2>Email</h2>
                        <Input type="text" theme="primary-input" placeholder=""/>
                    </FormSection>
                    <FormSection>
                        <h2>Password</h2>
                        <Input type="password" theme="primary-input" placeholder=""/>
                    </FormSection>
                    <FormSection>
                        <Button theme="primary-button" clickEvent={() => LoginSubmit({email, password})} placeholder="Confirm"/>
                    </FormSection>
                </div>
            </div>
        )} else if (pageToggle === "Register") {
            return (
                <div className="authpage-container">
                    <div className="authpage-body authpage-header">
                        <i className="logo-large"/>
                        <h1>SWARMWATCH</h1>
                    </div>
                    <div className="authpage-body authpage-form">
                        <FormSection>
                            <PageSwitch selected={pageToggle} clickEvent={pageToggler}/>
                        </FormSection>
                        <FormSection>
                            <h2>Email</h2>
                            <Input type="text" theme="primary-input" placeholder=""/>
                        </FormSection>
                        <FormSection>
                            <h2>Password</h2>
                            <Input type="password" theme="primary-input" placeholder=""/>
                        </FormSection>
                        <FormSection>
                            <Button theme="primary-button" clickEvent={() => LoginSubmit({email, password})} placeholder="Confirm"/>
                        </FormSection>
                    </div>
                </div>
                )
            } else { return <div>hmm error moment</div>}
}

export default AuthPage;