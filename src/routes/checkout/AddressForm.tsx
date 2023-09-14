import { Flex, Input, Select, Checkbox } from '@mantine/core'
import { STATES } from '../../util/states'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import { useContext } from 'react'

export default function AddressForm({
    type
}: {
    type: 'shipping' | 'billing'
}) {
    const {
        shippingAddressRefs,
        billingAddressRefs,
        toggleBilling
    } = useContext(CheckoutContext)

    const refs = type === 'shipping' ? shippingAddressRefs : billingAddressRefs
    
    return (
        <>
            {type === 'billing' && (
                <Checkbox
                    label='Same as shipping address'
                    onChange={e => toggleBilling(e.target.checked)}
                />
            )}

            <Flex
                gap={24}
            >

                <Input.Wrapper
                    label='First Name'
                    required
                    style={{
                        flexGrow: '1'
                    }}
                >
                
                    <Input
                        ref={refs.firstName}
                    />
                
                </Input.Wrapper>

                <Input.Wrapper
                    label='Last Name'
                    required
                    style={{
                        flexGrow: '1'
                    }}
                >
                
                    <Input
                        ref={refs.lastName}
                    />
                
                </Input.Wrapper>

            </Flex>

            <Input.Wrapper
                label='Address Line 1'
                required
            >
            
                <Input
                    ref={refs.addressLineOne}
                />
            
            </Input.Wrapper>

            <Input.Wrapper
                label='Address Line 2'
            >
            
                <Input
                    ref={refs.addressLineTwo}
                    placeholder="optional"
                />
            
            </Input.Wrapper>

            <Input.Wrapper
                label='Address Line 3'
            >
            
                <Input
                    ref={refs.addressLineThree}
                    placeholder="optional"
                />
            
            </Input.Wrapper>

            <Flex
                gap={16}
                wrap='wrap'
            >

                <Input.Wrapper
                    label='City'
                    required
                    style={{
                        flexGrow: '1'
                    }}
                >
                
                    <Input
                        ref={refs.city}
                    />
                
                </Input.Wrapper>

                <Select
                    ref={refs.state}
                    data={STATES}
                    label='State'
                    w={70}
                    required
                />

                <Input.Wrapper
                    label='ZIP'
                    required
                    style={{
                        flexGrow: '1'
                    }}
                >
                
                    <Input
                        ref={refs.zip}
                        type="number"
                    />
                
                </Input.Wrapper>

            </Flex>
        </>
    )
}