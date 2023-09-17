import { useContext } from 'react'
import styles from './account.module.css'
import { AuthContext } from '../../contexts/AuthContext'
import { Container, Flex, Stack, Text } from '@mantine/core'
import { Link } from 'react-router-dom'
import { IconAlertCircle } from '@tabler/icons-react'
import AccountAddress from '../../components/accountAddress/AccountAddress'

export default function Account() {
    const {
        user,
        userData
    } = useContext(AuthContext)

    return (
        <main
            className={styles.main}
        >

            {
                userData ? (
                    <Stack>
                        
                        <Container
                            w='100%'
                        >

                            <Text
                                size={20}
                                weight={600}
                            >
                                User: {user.email}
                            </Text>

                        </Container>

                        <AccountAddress
                            type='shipping'
                            address={userData.shippingAddress}
                        />

                        <AccountAddress
                            type='billing'
                            address={userData.shippingAddress}
                        />

                        <Stack>

                            <Text>
                                Orders
                            </Text>

                            <Container>

                                {
                                    userData.orders.length > 0 ? (
                                        userData.orders.map(order => (
                                            <Flex>
                                                {order}
                                            </Flex>
                                        ))
                                    ) : (
                                        <Text>
                                            No past orders!
                                        </Text>
                                    )
                                }

                            </Container>

                        </Stack>

                    </Stack>
                ) : (
                    <section
                        className={styles.no_user}
                    >

                        <IconAlertCircle
                            size={120}
                            strokeWidth={1}
                            opacity={0.2}
                        />

                        <Text
                            align='center'
                        >
                            Please <Link to='/login'>log in</Link> to view your account.
                        </Text>

                    </section>
                )
            }

        </main>
    )
}