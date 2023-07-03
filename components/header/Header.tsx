import { useState } from 'react'
import { Burger } from '@mantine/core'
import Menu from './Menu'
import CartIcon from './CartIcon'
import styles from './header.module.css'

export default function Header() {
    const [menuVisible, setMenuVisible] = useState(false)

    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <header className={styles.header}>
            
            <span>
                Commerce City
            </span>

            <CartIcon />

            <Burger
                opened={menuVisible}
                onClick={toggleMenu}
            />

            <Menu
                isVisible={menuVisible}
                toggleMenu={toggleMenu}
            />

        </header>
    )
}