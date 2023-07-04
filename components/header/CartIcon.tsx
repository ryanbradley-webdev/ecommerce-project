import { useContext, useMemo, useState } from 'react'
import { IconShoppingCart } from '@tabler/icons-react'
import styles from './header.module.css'
import { Badge, Button, Group, Menu, Stack, Text } from '@mantine/core'
import { Product } from '../../types'
import { CartContext } from '../../contexts/CartContext.tsx'
import { Link } from 'react-router-dom'

export default function CartIcon() {
    const { cart } = useContext(CartContext)

    const itemCount = useMemo(() => {
        let count = 0

        cart.forEach(item => {
            count += item.quantity
        })

        return count
    }, [cart])

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <Menu
            position='bottom-end'
            shadow='0px 3px 4px 3px rgba(0, 0, 0, 0.247)'
            opened={menuOpen}
        >

            <Menu.Target>

                <button
                    className={styles.cart}
                    onClick={toggleMenu}
                >
                    
                    <IconShoppingCart />

                    {itemCount > 0 && (
                        <Badge
                            variant='filled'
                            color='red'
                            className={styles.badge}
                            px={6}
                        >
                            {itemCount}
                        </Badge>)
                    }

                </button>

            </Menu.Target>

            <Menu.Dropdown
                pb={10}
            >

                <Menu.Label>
                    {itemCount} Items
                </Menu.Label>

                {cart.map(item => (
                    <MenuItem
                        product={item.product}
                        key={item.product.id}
                        toggleMenu={toggleMenu}
                    />
                ))}

                <Group
                    style={{
                        fontSize: '20px',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        borderTop: '1px solid rgba(0, 0, 0, 0.247)'
                    }}
                    pr={12}
                    pt={10}
                    my={12}
                >
                    <Text weight={500}>Total:</Text>
                    <Text>{'$234.54'}</Text>
                </Group>

                <Stack>

                    <Link 
                        to='/cart'
                        onClick={toggleMenu}
                        style={{ 
                            width: 'calc(100% - 24px)', 
                            marginInline: 'auto' 
                        }}
                    >
                        <Button
                            variant='outline'
                            style={{ 
                                width: '100%'
                            }}
                        >
                            Go To Cart
                        </Button>
                    </Link>

                    <Link
                        to='/checkout'
                        onClick={toggleMenu}
                        style={{ 
                            width: 'calc(100% - 24px)', 
                            marginInline: 'auto' 
                        }}
                    >
                        <Button
                            style={{ 
                                width: '100%'
                            }}
                        >
                            Checkout
                        </Button>
                    </Link>

                </Stack>

            </Menu.Dropdown>

        </Menu>
    )
}

function MenuItem({ 
    product,
    toggleMenu
}: { 
    product: Product,
    toggleMenu: () => void
}) {
    return (
        <Link to={`/products/${product.id}`}>
            <Menu.Item
                rightSection={product.name}
                onClick={toggleMenu}
                icon={
                    <img
                        src={product.image}
                        alt=""
                        width={50}
                        style={{ 
                            aspectRatio: '1 / 1', 
                            objectFit: 'cover', 
                            borderRadius: '4px' 
                        }}
                    />
                }
            ></Menu.Item>
        </Link>
    )
}