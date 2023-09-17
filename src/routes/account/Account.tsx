import { useContext, useState } from 'react'
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

    const [shippingAddress, setShippingAddress] = useState(userData?.shippingAddress || null)
    const [billingAddress, setBillingAddress] = useState(userData?.shippingAddress || null)

    const toggleBilling = (isSame: boolean) => {
        if (isSame) {
            setBillingAddress(shippingAddress)
        } else {
            setBillingAddress(null)
        }
    }

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
                            address={shippingAddress}
                        />

                        <AccountAddress
                            type='billing'
                            address={billingAddress}
                            toggleBilling={toggleBilling}
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