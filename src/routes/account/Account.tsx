import { useContext } from 'react'
import styles from './account.module.css'
import { AuthContext } from '../../contexts/AuthContext'
import { Text } from '@mantine/core'
import { Link } from 'react-router-dom'
import { IconAlertCircle } from '@tabler/icons-react'

export default function Account() {
    const {
        userData
    } = useContext(AuthContext)

    return (
        <main
            className={styles.main}
        >

            {
                userData ? (
                    <h1>
                        {userData.user_id}
                    </h1>
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