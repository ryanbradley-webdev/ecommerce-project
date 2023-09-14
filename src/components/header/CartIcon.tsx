import { useContext, useState } from 'react'
import { IconShoppingCart } from '@tabler/icons-react'
import styles from './header.module.css'
import { Badge, Button, Group, Menu, Stack, Text } from '@mantine/core'
import { CartContext } from '../../contexts/CartContext.tsx'
import { Link } from 'react-router-dom'
import RemoveBtn from '../RemoveBtn.tsx'

export default function CartIcon() {
    const { cart, cartQuantity, cartTotal } = useContext(CartContext)

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <Menu
            position='bottom-end'
            shadow='0px 3px 4px 3px rgba(0, 0, 0, 0.247)'
            opened={menuOpen}
            width={280}
        >

            <Menu.Target>

                <button
                    className={styles.cart}
                    onClick={toggleMenu}
                >
                    
                    <IconShoppingCart />

                    {cartQuantity > 0 && (
                        <Badge
                            variant='filled'
                            color='red'
                            className={styles.badge}
                            px={6}
                        >
                            {cartQuantity}
                        </Badge>)
                    }

                </button>

            </Menu.Target>

            <Menu.Dropdown
                pb={10}
            >

                <Menu.Label>
                    {cartQuantity} Items
                </Menu.Label>

                {cart.map(item => (
                    <Link to={`/products/${item.product.id}`} key={item.product.id}>
                        <MenuItem
                            {...item}
                            toggleMenu={toggleMenu}
                        />
                    </Link>
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
                    <Text>{'$' + cartTotal}</Text>
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
        <Menu.Item
            className={styles.product}
            rightSection={
                <>
                    <Text weight={500} size={16}>{product.name}</Text>
                    <div className={styles.product_data}>
                        <Text>
                            &times;{quantity}
                        </Text>
                        <RemoveBtn
                            id={product.id}
                        />
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
    )
}