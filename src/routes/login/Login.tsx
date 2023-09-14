import { Text, Stack, Container, Input, Button } from '@mantine/core'
import styles from './login.module.css'
import { useState } from 'react'

export default function Login() {
    const [newAccount, setNewAccount] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

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
                                    required
                                />
                            
                            </Input.Wrapper>
                        )
                    }

                    <Button>

                        {newAccount ? 'Create Account' : 'Log In'}

                    </Button>

                    <Container>

                        <Text>
                            {newAccount ? 'Already' : 'Don\'t'} have an account?
                        </Text>

                        <Button
                            type='button'
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