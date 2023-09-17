import { useContext } from 'react'
import styles from './account.module.css'
import { AuthContext } from '../../contexts/AuthContext'
import { Container, Flex, Stack, Text } from '@mantine/core'
import { Link } from 'react-router-dom'
import { IconAlertCircle } from '@tabler/icons-react'

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

                        <Stack>

                            <Flex
                                justify='space-between'
                            >

                                <Text>
                                    Shipping Address
                                </Text>

                                <button>
                                    Edit
                                </button>

                            </Flex>

                            <Container>

                                {
                                    userData.shippingAddress ? (
                                        <>
                                            <Text>
                                                {userData.shippingAddress.firstName}
                                            </Text>

                                            <Text>
                                                {userData.shippingAddress.lastName}
                                            </Text>
                                        </>
                                    ) : (
                                        <Text>
                                            No shipping address saved
                                        </Text>
                                    )
                                }

                            </Container>

                        </Stack>

                        <Stack>

                            <Flex
                                justify='space-between'
                            >

                                <Text>
                                    Billing Address
                                </Text>

                                <button>
                                    Edit
                                </button>

                            </Flex>

                            <Container>

                                {
                                    userData.billingAddress ? (
                                        <>
                                            <Text>
                                                {userData.billingAddress.firstName}
                                            </Text>

                                            <Text>
                                                {userData.billingAddress.lastName}
                                            </Text>
                                        </>
                                    ) : (
                                        <Text>
                                            No billing address saved
                                        </Text>
                                    )
                                }

                            </Container>

                        </Stack>

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