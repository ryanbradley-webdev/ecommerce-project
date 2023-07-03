import styles from './header.module.css'
import { Link } from 'react-router-dom'
import { IconHome2, IconShoppingBag, IconShoppingCart } from '@tabler/icons-react'

export default function Menu({
    isVisible,
    toggleMenu
}: {
    isVisible: boolean,
    toggleMenu: () => void
}) {
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
                    size={30}
                    strokeWidth={2}
                    color='var(--color-blue)'
                />

                Home

            </Link>

            <Link
                to='/products'
                onClick={toggleMenu}
            >

                <IconShoppingBag
                    size={30}
                    strokeWidth={2}
                    color='var(--color-blue)'
                />

                Products

            </Link>

            <Link
                to='/cart'
                onClick={toggleMenu}
            >

                <IconShoppingCart
                    size={30}
                    strokeWidth={2}
                    color='var(--color-blue)'
                />
                
                Cart
                
            </Link>

        </nav>
    )
}