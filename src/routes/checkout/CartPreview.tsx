import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Button, Flex, Stack, Popover, Text } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'

export default function CartPreview() {
    const { cart } = useContext(CartContext)

    return (
        <Popover
            position='bottom-start'
        >

            <Popover.Target>

                <Button
                    variant='outline'
                    mx='auto'
                    display='block'
                    w='100%'
                    maw={600}
                >

                    <IconChevronDown
                        width={20}
                    />

                    &nbsp;View Cart

                </Button>

            </Popover.Target>

            <Popover.Dropdown
                px={48}
                style={{
                    boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.247)'
                }}
            >

                {cart.length > 0 ? (
                    cart.map(item => (
                        <PreviewItem key={item.product.id} {...item} />
                    ))
                ) : (
                    <Text>There aren&apos;t any items in your cart!</Text>
                )}

            </Popover.Dropdown>

        </Popover>
    )
}

function PreviewItem({
    product,
    quantity
}: {
    product: Product,
    quantity: number
}) {


    return (
        <Flex
            gap={16}
            my={24}
        >

            <img 
                src={product.image} 
                alt='' 
                width={80} 
                height='auto'
                style={{
                    borderRadius: '4px'
                }}
            />

            <Stack
                spacing={0}
            >

                <Text
                    size={14}
                >
                    {product.brand}
                </Text>

                <Text
                    weight={500}
                    size={18}
                >
                    {product.name}
                </Text>

                <Text
                    color='gray'
                    italic
                    size={12}
                >
                    x {quantity}
                </Text>

            </Stack>

        </Flex>
    )
}