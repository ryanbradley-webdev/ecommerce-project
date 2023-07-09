import { CartContext } from "../../../contexts/CartContext"
import { useContext, useReducer } from 'react'
import CartPreview from "./CartPreview"
import { Accordion, Button, Checkbox, Flex, Input, Select } from "@mantine/core"
import { initialCheckoutData, reducer } from "./CheckoutReducer"

export default function Checkout() {
    const { cart } = useContext(CartContext)

    const [customerInfo, dispatch] = useReducer(reducer, initialCheckoutData)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <main>
            
            <CartPreview />

            <form action="" onSubmit={handleSubmit}>

                <Accordion>

                    <Accordion.Item value="shipping">
                        
                        <Accordion.Control>
                            Shipping Address
                        </Accordion.Control>

                        <Accordion.Panel>

                            <Flex>

                                <Input.Wrapper
                                    label='First Name'
                                    required
                                >
                                
                                    <Input />
                                
                                </Input.Wrapper>

                                <Input.Wrapper
                                    label='Last Name'
                                    required
                                >
                                
                                    <Input />
                                
                                </Input.Wrapper>

                            </Flex>

                            <Input.Wrapper
                                label='Address Line 1'
                                required
                            >
                            
                                <Input />
                            
                            </Input.Wrapper>

                            <Input.Wrapper
                                label='Address Line 2'
                            >
                            
                                <Input
                                    placeholder="optional"
                                />
                            
                            </Input.Wrapper>

                            <Input.Wrapper
                                label='Address Line 3'
                            >
                            
                                <Input
                                    placeholder="optional"
                                />
                            
                            </Input.Wrapper>

                            <Flex>

                                <Input.Wrapper
                                    label='City'
                                    required
                                >
                                
                                    <Input />
                                
                                </Input.Wrapper>

                                <Select data={['AK', 'GA']} label='State' required />

                                <Input.Wrapper
                                    label='ZIP'
                                    required
                                >
                                
                                    <Input />
                                
                                </Input.Wrapper>

                            </Flex>

                        </Accordion.Panel>

                    </Accordion.Item>

                    <Accordion.Item value="billing">
                        
                        <Accordion.Control>
                            Billing Address
                        </Accordion.Control>

                        <Accordion.Panel>

                            <Checkbox label='Same as shipping address' />

                            <Flex>

                                <Input.Wrapper
                                    label='First Name'
                                    required
                                >
                                
                                    <Input />
                                
                                </Input.Wrapper>

                                <Input.Wrapper
                                    label='Last Name'
                                    required
                                >
                                
                                    <Input />
                                
                                </Input.Wrapper>

                            </Flex>

                            <Input.Wrapper
                                label='Address Line 1'
                                required
                            >
                            
                                <Input />
                            
                            </Input.Wrapper>

                            <Input.Wrapper
                                label='Address Line 2'
                            >
                            
                                <Input
                                    placeholder="optional"
                                />
                            
                            </Input.Wrapper>

                            <Input.Wrapper
                                label='Address Line 3'
                            >
                            
                                <Input
                                    placeholder="optional"
                                />
                            
                            </Input.Wrapper>

                            <Flex>

                                <Input.Wrapper
                                    label='City'
                                    required
                                >
                                
                                    <Input />
                                
                                </Input.Wrapper>

                                <Select data={['AK', 'GA']} label='State' required />

                                <Input.Wrapper
                                    label='ZIP'
                                    required
                                >
                                
                                    <Input />
                                
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
                            
                                <Input type="number" />
                            
                            </Input.Wrapper>

                            <Flex>
                                
                                <Input.Wrapper
                                    label='Expiration'
                                    required
                                >
                                
                                    <Input type="number" />
                                
                                </Input.Wrapper>

                                <Input.Wrapper
                                    label='CVV'
                                    required
                                >
                                
                                    <Input type="number" />
                                
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
                                justify='center'
                                gap={24}
                            >

                                <Button
                                    variant="outline"
                                    color="gray"
                                    w={200}
                                >
                                    Cancel
                                </Button>

                                <Button
                                    w={200}
                                    type="submit"
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