import { useContext, useEffect, useRef } from 'react'
import { Text, Stack, Container, Input, Button, Flex, Loader } from '@mantine/core'
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
    const [errMsg, setErrMsg] = useState('')
    const [loading, setLoading] = useState(false)

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const passwordConfirmRef = useRef<HTMLInputElement>(null)

    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!emailRef.current || !passwordRef.current) return

        const { value: email } = emailRef.current
        const { value: password } = passwordRef.current

        if (newAccount) {
            if (!passwordConfirmRef.current) return

            const { value: passwordConfirm } = passwordConfirmRef.current

            if (password !== passwordConfirm) return

            setLoading(true)

            signup(email, password)
                .then(res => {
                    if (res.error) {
                        setErrMsg(typeof res.error === 'string' ? res.error : res.error.message)
                    }

                    setLoading(false)
                })
        } else {
            login(email, password)
                .then(res => {
                    if (res.error) {
                        setErrMsg(typeof res.error === 'string' ? res.error : res.error.message)
                    }

                    setLoading(false)
                })
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
                className={styles.form}
            >

                <Stack
                    spacing={30}
                >

                    <Container>

                        <Text
                            weight={700}
                            size={20}
                            align='center'
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
                            autoComplete='current-email'
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
                            autoComplete='new-password'
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
                                    autoComplete='new-password'
                                    required
                                />
                            
                            </Input.Wrapper>
                        )
                    }

                    {errMsg && (
                        <Text
                            color='var(--color-red)'
                        >
                            {errMsg}
                        </Text>
                    )}

                    <Button
                        type='submit'
                        disabled={loading}
                    >

                        {
                            loading ? (
                                <Loader variant='dots' />
                            ) : (
                                newAccount ? 'Create Account' : 'Log In'
                            )
                        }

                    </Button>

                    <Flex
                        justify='center'
                        align='center'
                    >

                        <Text>
                            {newAccount ? 'Already' : 'Don\'t'} have an account?
                        </Text>

                        <Button
                            variant='subtle'
                            onClick={() => setNewAccount(!newAccount)}
                        >
                            {newAccount ? 'Log In' : 'Create an account'}
                        </Button>

                    </Flex>

                </Stack>

            </form>

        </main>
    )
}