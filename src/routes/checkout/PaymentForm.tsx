import { Flex, Input } from "@mantine/core";
import { useContext } from 'react'
import { CheckoutContext } from "../../../contexts/CheckoutContext";

export default function PaymentForm() {
    const { paymentRefs } = useContext(CheckoutContext)

    return (
        <>
            <Input.Wrapper
                label='Credit Card Number'
                required
            >
            
                <Input 
                    ref={paymentRefs.cardNumber}
                    type="number"
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
                        ref={paymentRefs.expiration}
                        placeholder="MM/YY"
                    />
                
                </Input.Wrapper>

                <Input.Wrapper
                    label='CVV'
                    required
                    w={100}
                >
                
                    <Input
                        ref={paymentRefs.cvv}
                        type="number"
                        placeholder="e.g. 123"
                    />
                
                </Input.Wrapper>

            </Flex>
        </>
    )
}