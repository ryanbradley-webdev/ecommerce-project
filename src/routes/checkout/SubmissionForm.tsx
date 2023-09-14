import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import ProductConfirmationCard from '../../components/ProductConfirmationCard'
import { Button, Flex, Loader, Text } from '@mantine/core'
import { CheckoutContext } from '../../contexts/CheckoutContext'

export default function SubmissionForm({
    onClick
}: {
    onClick: () => void
}) {
    const { cart, cartTotal } = useContext(CartContext)
    const { isSubmitting, isError } = useContext(CheckoutContext)

    const btnMsg = () => {
        if (isSubmitting) {
            return <Loader variant="dots" />
        }

        if (isError) {
            return (
                <Text>
                    Something went wrong
                </Text>
            )
        }

        return 'Submit'
    }

    return (
        <>

            {cart.map(item => (
                <ProductConfirmationCard
                    key={item.product.id}
                    { ...item }
                />
            ))}

            <Flex
                mb={24}
                justify='space-between'
                px={16}
            >

                <Text
                    weight={500}
                    size={20}
                >
                    Grand Total:
                </Text>

                <Text
                    weight={500}
                    size={20}
                >
                    ${cartTotal}
                </Text>

            </Flex>

            <Flex
                gap={16}
                mt={24}
                wrap='wrap'
                align='center'
                justify='center'
            >

                <Button
                    w={200}
                    onClick={onClick}
                    variant="outline"
                >
                    Back
                </Button>

                <Button
                    type="submit"
                    w={200}
                >
                    {btnMsg()}
                </Button>

            </Flex>

        </>
    )
}