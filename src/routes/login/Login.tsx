import { useContext, useEffect, useRef } from 'react'
import { Text, Stack, Container, Input, Button } from '@mantine/core'
import { useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import styles from './login.module.css'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const {
        user,
        login,
        signup
    } = useContext(AuthContext)

    const [newAccount, setNewAccount] = useState(false)

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const passwordConfirmRef = useRef<HTMLInputElement>(null)

    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!emailRef.current || !passwordRef.current) return

        const { value: email } = emailRef.current
        const { value: password } = passwordRef.current

        if (newAccount) {
            if (!passwordConfirmRef.current) return

            const { value: passwordConfirm } = passwordConfirmRef.current

            if (password !== passwordConfirm) return

            signup(email, password)
        } else {
            login(email, password)
        }
    }

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user, navigate])

    return (
        <main
            className={styles.main}
        >

            <form
                onSubmit={handleSubmit}
            >

                <Stack>

                    <Container>

                        <Text
                            weight={700}
                            size={20}
                        >
                            {newAccount ? 'Enter your information to create an account' : 'Log in to place an order'}
                        </Text>

                    </Container>

                    <Input.Wrapper
                        label='Email Address'
                        required
                    >
                    
                        <Input
                            type='email'
                            placeholder='e.g. johndoe@email.com'
                            ref={emailRef}
                            required
                        />
                    
                    </Input.Wrapper>

                    <Input.Wrapper
                        label='Password'
                        required
                    >
                    
                        <Input
                            type='password'
                            placeholder='Enter your password'
                            ref={passwordRef}
                            required
                        />
                    
                    </Input.Wrapper>

                    {
                        newAccount && (
                            <Input.Wrapper
                                label='Confirm Password'
                                required
                            >
                            
                                <Input
                                    type='password'
                                    placeholder='Confirm your password'
                                    ref={passwordConfirmRef}
                                    required
                                />
                            
                            </Input.Wrapper>
                        )
                    }

                    <Button
                        type='submit'
                    >

                        {newAccount ? 'Create Account' : 'Log In'}

                    </Button>

                    <Container>

                        <Text>
                            {newAccount ? 'Already' : 'Don\'t'} have an account?
                        </Text>

                        <Button
                            onClick={() => setNewAccount(!newAccount)}
                        >
                            {newAccount ? 'Log In' : 'Create an account'}
                        </Button>

                    </Container>

                </Stack>

            </form>

        </main>
    )
}