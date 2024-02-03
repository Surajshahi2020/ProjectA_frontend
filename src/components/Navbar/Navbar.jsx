import React, { useEffect } from 'react';
import { EuiHeader, EuiHeaderSectionItem, EuiHeaderLinks, EuiHeaderLink, EuiButton, EuiAvatar, EuiFlexGroup, EuiFlexItem, EuiText } from '@elastic/eui';
import { useNavigate } from 'react-router-dom';
import LogoImage from '../../images/logo.png';

const Navbar = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = JSON.parse(localStorage.getItem("accessToken") || "{}");
        if (accessToken && accessToken.key) {
            navigate('/dashboard'); 
        }
    }, [navigate]);

    const handleLogin = () => {
        navigate('/login');
    };

    const handleSignup = () => {
        navigate('/signup');
    };

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        navigate('/');
    };

    return (
        <EuiHeader className="navbar">
            <EuiHeaderSectionItem border="right">
                <EuiAvatar size="m" name="Logo" imageUrl={LogoImage} />
            </EuiHeaderSectionItem>

            <EuiHeaderSectionItem>
                <EuiHeaderLinks>
                    <EuiHeaderLink href="dashboard">Dashboard</EuiHeaderLink>
                    <EuiHeaderLink href="#feature2">Training</EuiHeaderLink>
                    <EuiHeaderLink href="#feature3">Promotion</EuiHeaderLink>
                    <EuiHeaderLink href="#feature3">Tracking</EuiHeaderLink>
                    <EuiHeaderLink href="#feature3">Budget</EuiHeaderLink>
                    <EuiHeaderLink href="#feature3">Mission</EuiHeaderLink>
                    <EuiHeaderLink href="#feature9">Communication</EuiHeaderLink>
                </EuiHeaderLinks>
            </EuiHeaderSectionItem>

            <EuiHeaderSectionItem>
                {localStorage.getItem("accessToken") ? (
                    <EuiText>
                        <EuiButton onClick={handleLogout} size="s" fullWidth fill color='danger'>
                            Logout
                        </EuiButton>
                    </EuiText>
                ) : (
                    <EuiFlexGroup responsive={false} gutterSize="s" alignItems="center">
                        <EuiFlexItem>
                            <EuiText>
                                <EuiButton onClick={handleLogin} size="s" fullWidth fill color='primary'>
                                    Login
                                </EuiButton>
                            </EuiText>
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <EuiText>
                                <EuiButton onClick={handleSignup} size="s" fullWidth fill color='danger'>
                                    Signup
                                </EuiButton>
                            </EuiText>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                )}
            </EuiHeaderSectionItem>
        </EuiHeader>
    );
};

export default Navbar;
