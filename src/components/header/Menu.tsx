import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IconHome2, IconShoppingBag, IconShoppingCart, IconUserCircle } from '@tabler/icons-react'
import { AuthContext } from '../../contexts/AuthContext'
import styles from './header.module.css'

export default function Menu({
    isVisible,
    toggleMenu
}: {
    isVisible: boolean,
    toggleMenu: () => void
}) {
    const {
        user
    } = useContext(AuthContext)

    return (
        <nav
            className={styles.menu}
            style={{ right: isVisible ? '0' : '-100%' }}
        >

            <Link
                to='/'
                onClick={toggleMenu}
            >

                <IconHome2
                    size={36}
                    strokeWidth={2}
                    color='var(--color-blue-light)'
                />

                Home

            </Link>

            <Link
                to='/products'
                onClick={toggleMenu}
            >

                <IconShoppingBag
                    size={36}
                    strokeWidth={2}
                    color='var(--color-blue-light)'
                />

                Products

            </Link>

            <Link
                to='/cart'
                onClick={toggleMenu}
            >

                <IconShoppingCart
                    size={36}
                    strokeWidth={2}
                    color='var(--color-blue-light)'
                />
                
                Cart
                
            </Link>

            <Link
                to={user ? '/account' : '/login'}
                onClick={toggleMenu}
            >

                <IconUserCircle
                    size={36}
                    strokeWidth={2}
                    color='var(--color-blue-light)'
                />

                {user ? 'Account' : 'Log In'}

            </Link>

        </nav>
    )
}