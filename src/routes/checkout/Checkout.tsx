import { CartContext } from "../../../contexts/CartContext"
import { Reducer, useContext, useReducer } from 'react'
import CartPreview from "./CartPreview"
import { Accordion, Button, Checkbox, Flex, Input, Select, Text } from "@mantine/core"
import { initialCheckoutData, reducer } from "./CheckoutReducer"
import { STATES } from '../../../util/states'
import { CheckoutAction, CheckoutData } from "../../../types"

export default function Checkout() {
    const { cartTotal } = useContext(CartContext)

    const [customerInfo, dispatch] = useReducer<Reducer<CheckoutData, CheckoutAction>>(reducer, initialCheckoutData)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    const toggleBillingInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            dispatch({ type: 'copyShipping', payload: customerInfo.shippingAddress })
        } else {
            dispatch({ type: 'resetBilling' })
        }
    }

    return (
        <main>
            
            <CartPreview />

            <form action="" onSubmit={handleSubmit}>

                <Accordion
                    maw={600}
                    mx='auto'
                    styles={{
                        content: {
                            display: 'grid',
                            rowGap: '16px'
                        }
                    }}
                >

                    <Accordion.Item value="shipping">
                        
                        <Accordion.Control>
                            Shipping Address
                        </Accordion.Control>

                        <Accordion.Panel>

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
                                        value={customerInfo.shippingAddress.firstName}
                                        onChange={e => dispatch({ type: 'shipping/changeFirstName', payload: e.target.value })}
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
                                        value={customerInfo.shippingAddress.lastName}
                                        onChange={e => dispatch({ type: 'shipping/changeLastName', payload: e.target.value })}
                                    />
                                
                                </Input.Wrapper>

                            </Flex>

                            <Input.Wrapper
                                label='Address Line 1'
                                required
                            >
                            
                                <Input
                                    value={customerInfo.shippingAddress.addressLineOne}
                                    onChange={e => dispatch({ type: 'shipping/changeAddressLineOne', payload: e.target.value })}
                                />
                            
                            </Input.Wrapper>

                            <Input.Wrapper
                                label='Address Line 2'
                            >
                            
                                <Input
                                    placeholder="optional"
                                    value={customerInfo.shippingAddress.addressLineTwo}
                                    onChange={e => dispatch({ type: 'shipping/changeAddressLineTwo', payload: e.target.value })}
                                />
                            
                            </Input.Wrapper>

                            <Input.Wrapper
                                label='Address Line 3'
                            >
                            
                                <Input
                                    placeholder="optional"
                                    value={customerInfo.shippingAddress.addressLineThree}
                                    onChange={e => dispatch({ type: 'shipping/changeAddressLineThree', payload: e.target.value })}
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
                                        value={customerInfo.shippingAddress.city}
                                        onChange={e => dispatch({ type: 'shipping/changeCity', payload: e.target.value })}
                                    />
                                
                                </Input.Wrapper>

                                <Select
                                    data={STATES}
                                    value={customerInfo.shippingAddress.state}
                                    onChange={e => dispatch({ type: 'shipping/changeState', payload: e || '' })}
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
                                        type="number"
                                        value={customerInfo.shippingAddress.zip || ''}
                                        onChange={e => dispatch({ type: 'shipping/changeZip', payload: e.target.value })}
                                    />
                                
                                </Input.Wrapper>

                            </Flex>

                        </Accordion.Panel>

                    </Accordion.Item>

                    <Accordion.Item value="billing">
                        
                        <Accordion.Control>
                            Billing Address
                        </Accordion.Control>

                        <Accordion.Panel>

                            <Checkbox
                                label='Same as shipping address'
                                onChange={toggleBillingInfo}
                            />

                            <Flex
                                gap={16}
                            >

                                <Input.Wrapper
                                    label='First Name'
                                    required
                                    style={{
                                        flexGrow: '1'
                                    }}
                                >
                                
                                    <Input
                                        value={customerInfo.billingAddress.firstName}
                                        onChange={e => dispatch({ type: 'billing/changeFirstName', payload: e.target.value })}
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
                                        value={customerInfo.billingAddress.lastName}
                                        onChange={e => dispatch({ type: 'billing/changeLastName', payload: e.target.value })}
                                    />
                                
                                </Input.Wrapper>

                            </Flex>

                            <Input.Wrapper
                                label='Address Line 1'
                                required
                            >
                            
                                <Input
                                    value={customerInfo.billingAddress.addressLineOne}
                                    onChange={e => dispatch({ type: 'billing/changeAddressLineOne', payload: e.target.value })}
                                />
                            
                            </Input.Wrapper>

                            <Input.Wrapper
                                label='Address Line 2'
                            >
                            
                                <Input
                                    placeholder="optional"
                                    value={customerInfo.billingAddress.addressLineTwo}
                                    onChange={e => dispatch({ type: 'billing/changeAddressLineTwo', payload: e.target.value })}
                                />
                            
                            </Input.Wrapper>

                            <Input.Wrapper
                                label='Address Line 3'
                            >
                            
                                <Input
                                    placeholder="optional"
                                    value={customerInfo.billingAddress.addressLineThree}
                                    onChange={e => dispatch({ type: 'billing/changeAddressLineThree', payload: e.target.value })}
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
                                        value={customerInfo.billingAddress.city}
                                        onChange={e => dispatch({ type: 'billing/changeCity', payload: e.target.value })}
                                    />
                                
                                </Input.Wrapper>

                                <Select
                                    data={STATES}
                                    value={customerInfo.billingAddress.state}
                                    onChange={e => dispatch({ type: 'billing/changeState', payload: e || '' })}
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
                                        type="number"
                                        value={customerInfo.billingAddress.zip || ''}
                                        onChange={e => dispatch({ type: 'billing/changeZip', payload: e.target.value })}
                                    />
                                
                                </Input.Wrapper>

                            </Flex>

                        </Accordion.Panel>

                    </Accordion.Item>

                    <Accordion.Item value="payment">
                        
                        <Accordion.Control>
                            Payment
                        </Accordion.Control>

                        <Accordion.Panel>

                            <Input.Wrapper
                                label='Credit Card Number'
                                required
                            >
                            
                                <Input 
                                    type="number"
                                    value={customerInfo.payment.cardNumber || ''}
                                    onChange={e => dispatch({ type: 'changeCardNumber', payload: e.target.value || null })}
                                />
                            
                            </Input.Wrapper>

                            <Flex
                                gap={16}
                            >
                                
                                <Input.Wrapper
                                    label='Expiration'
                                    required
                                    style={{
                                        flexGrow: '1'
                                    }}
                                >
                                
                                    <Input
                                        value={customerInfo.payment.expiration}
                                        onChange={e => dispatch({ type: 'changeExpiration', payload: e.target.value })}
                                        placeholder="MM/YY"
                                    />
                                
                                </Input.Wrapper>

                                <Input.Wrapper
                                    label='CVV'
                                    required
                                    w={100}
                                >
                                
                                    <Input
                                        type="number"
                                        value={customerInfo.payment.cvv || ''}
                                        onChange={e => dispatch({ type: 'changeCvv', payload: e.target.value || null })}
                                        placeholder="e.g. 123"
                                    />
                                
                                </Input.Wrapper>

                            </Flex>

                        </Accordion.Panel>

                    </Accordion.Item>

                    <Accordion.Item value="confirm">
                        
                        <Accordion.Control>
                            Confirm
                        </Accordion.Control>

                        <Accordion.Panel>

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
                                justify='center'
                                gap={24}
                            >

                                <Button
                                    variant="outline"
                                    color="gray"
                                    fullWidth
                                >
                                    Cancel
                                </Button>

                                <Button
                                    type="submit"
                                    fullWidth
                                >
                                    Submit
                                </Button>

                            </Flex>

                        </Accordion.Panel>

                    </Accordion.Item>

                </Accordion>

            </form>

        </main>
    )
}