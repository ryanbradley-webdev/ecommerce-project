import { Stack, Flex, Button, Container, Text } from "@mantine/core";
import { useRef, useState } from "react";
import AddressForm from "../../routes/checkout/AddressForm";
import { capitalize } from "../../util/capitalize";


export default function AccountAddress({
    toggleBilling,
    type,
    address
}: {
    toggleBilling?: (isSame: boolean) => void
    type: 'shipping' | 'billing'
    address: Address | null
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

    const toggleEditing = () => {
        setEditing(!editing)
    }

    const handleToggleBilling = () => {
        if (toggleBilling) {
            toggleBilling(!billingIsSame)
            setBillingIsSame(!billingIsSame)
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