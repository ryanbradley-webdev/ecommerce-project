import { useContext, useMemo, useState } from 'react'
import { IconShoppingCart, IconTrashX } from '@tabler/icons-react'
import styles from './header.module.css'
import { Badge, Button, Group, Menu, Stack, Text } from '@mantine/core'
import { Product } from '../../types'
import { CartContext } from '../../contexts/CartContext.tsx'
import { Link } from 'react-router-dom'

export default function CartIcon() {
    const { cart } = useContext(CartContext)

    const [itemCount, cartCost] = useMemo(() => {
        let count = 0
        let cost = 0

        cart.forEach(item => {
            count += item.quantity
            cost += Number(item.product.price) * item.quantity
        })

        const truncateCost = (string: string) => {
            const decimalIdx = string.indexOf('.')

            const newString = string.slice(0, decimalIdx + 3)

            return newString.length < decimalIdx + 3 ? newString + '0' : newString
        }

        const costStr = cost % 1 === 0 ? cost.toString() + '.00' : truncateCost(cost.toString())

        return [count, costStr]
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
                        {...item}
                        key={item.product.id}
                        toggleMenu={toggleMenu}
                    />
                ))}

                <Group
                    style={{
                        fontSize: '20px',
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}
                    pr={12}
                    py={10}
                >
                    <Text weight={500}>Total:</Text>
                    <Text>{'$' + cartCost}</Text>
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
    quantity,
    toggleMenu
}: { 
    product: Product,
    quantity: number,
    toggleMenu: () => void
}) {
    return (
        <Link to={`/products/${product.id}`}>
            <Menu.Item
                className={styles.product}
                rightSection={
                    <>
                        <Text weight={500} size={16}>{product.name}</Text>
                        <div className={styles.product_data}>
                            <Text>
                                &times;{quantity}
                            </Text>
                            <p>
                                <IconTrashX size={20} color='var(--color-red)' />
                                Remove
                            </p>
                        </div>
                    </>
                }
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