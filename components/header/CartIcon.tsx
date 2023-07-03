import { IconShoppingCart } from '@tabler/icons-react'
import styles from './header.module.css'
import { Badge, Button, Group, Menu, Stack, Text } from '@mantine/core'
import { Product } from '../../types'
import { PLACEHOLDER_ITEMS } from '../../src/routes/home/Home'

export default function CartIcon() {
    return (
        <Menu
            position='bottom-end'
            shadow='0px 3px 4px 3px rgba(0, 0, 0, 0.247)'
        >

            <Menu.Target>

                <button className={styles.cart}>
                    
                    <IconShoppingCart />

                    <Badge
                        variant='filled'
                        color='red'
                        className={styles.badge}
                        px={6}
                    >
                        3
                    </Badge>

                </button>

            </Menu.Target>

            <Menu.Dropdown
                pb={10}
            >

                <Menu.Label>
                    3 Items
                </Menu.Label>

                {PLACEHOLDER_ITEMS.map(item => (
                    <MenuItem
                        product={item}
                        key={item.id}
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

                    <Button
                        variant='outline'
                        style={{ 
                            width: 'calc(100% - 24px)', 
                            marginInline: 'auto' 
                        }}
                    >
                        Go To Cart
                    </Button>

                    <Button
                        style={{ 
                            width: 'calc(100% - 24px)', 
                            marginInline: 'auto' 
                        }}
                    >
                        Checkout
                    </Button>

                </Stack>

            </Menu.Dropdown>

        </Menu>
    )
}

function MenuItem({ product }: { product: Product }) {
    return (
        <Menu.Item
            rightSection={product.name}
            closeMenuOnClick
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