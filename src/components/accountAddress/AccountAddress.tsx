import { Stack, Flex, Button, Container, Text } from "@mantine/core";
import { useRef, useState, Dispatch, SetStateAction } from "react";
import AddressForm from "../../routes/checkout/AddressForm";
import { capitalize } from "../../util/capitalize";


export default function AccountAddress({
    toggleBilling,
    type,
    address,
    shippingAddress,
    setAddress
}: {
    toggleBilling?: (isSame: boolean) => void
    type: 'shipping' | 'billing'
    address: Address | null
    shippingAddress?: Address
    setAddress?: Dispatch<SetStateAction<Address>>
}) {
    const refs = {
        firstName: useRef<HTMLInputElement>(null),
        lastName: useRef<HTMLInputElement>(null),
        addressLineOne: useRef<HTMLInputElement>(null),
        addressLineTwo: useRef<HTMLInputElement>(null),
        addressLineThree: useRef<HTMLInputElement>(null),
        city: useRef<HTMLInputElement>(null),
        state: useRef<HTMLInputElement>(null),
        zip: useRef<HTMLInputElement>(null)
    }

    const [editing, setEditing] = useState(false)

    const [billingIsSame, setBillingIsSame] = useState(false)

    const copyAddress = () => {
        if (address && shippingAddress) {
            Object.keys(refs).forEach(key => {
                const field = key as keyof Address

                if (refs[field].current) {
                    (refs[field].current as HTMLInputElement).value = shippingAddress[field]
                }
            })
        }
    }

    const toggleEditing = () => {
        setEditing(!editing)
    }

    const handleToggleBilling = () => {
        if (toggleBilling) {
            setBillingIsSame(!billingIsSame)
            toggleBilling(!billingIsSame)

            if (!billingIsSame) {
                copyAddress()
            }
        }
    }

    const handleChange = (value: string, type: keyof Address) => {
        if (address && setAddress) {
            const addressCopy = { ...address }

            addressCopy[type] = value

            setAddress(addressCopy)
        }
    }

    return (
        <Stack>

            <Flex
                justify='space-between'
            >

                <Text>
                    {capitalize(type)} Address
                </Text>

                <Button
                    onClick={toggleEditing}
                >
                    Edit
                </Button>

            </Flex>

            {
                editing ? (
                    <AddressForm
                        type={type}
                        refs={refs}
                        toggleBilling={type === 'billing' ? handleToggleBilling : undefined}
                        onChange={handleChange}
                    />
                ) : (
                    <Container>

                        {
                            address ? (
                                <>
                                    <Text>
                                        {address.firstName}
                                    </Text>

                                    <Text>
                                        {address.lastName}
                                    </Text>
                                </>
                            ) : (
                                <Text>
                                    No {type} address saved
                                </Text>
                            )
                        }

                    </Container>
                )
            }

        </Stack>
    )
}