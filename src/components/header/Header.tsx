import { useState } from 'react'
import { Burger, Text } from '@mantine/core'
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
            
            <Text
                weight={500}
            >
                The Shoe Zone
            </Text>

            <div className={styles.icons}>

                <CartIcon />

                <Burger
                    opened={menuVisible}
                    onClick={toggleMenu}
                />

            </div>

            <Menu
                isVisible={menuVisible}
                toggleMenu={toggleMenu}
            />

        </header>
    )
}