import { Accordion, Button, Flex } from "@mantine/core"
import AddressForm from "./AddressForm"
import PaymentForm from "./PaymentForm"
import SubmissionForm from "./SubmissionForm"
import { CheckoutContext } from "../../contexts/CheckoutContext"
import { useContext, useState } from "react"

export default function CheckoutForm() {
    const { handleSubmit } = useContext(CheckoutContext)

    const [formValue, setFormValue] = useState('shipping')

    return (
        <form 
            action="" 
            onSubmit={handleSubmit}
            style={{
                marginBlock: '48px',
            }}
        >

            <Accordion
                maw={600}
                mx='auto'
                styles={{
                    content: {
                        display: 'grid',
                        rowGap: '16px',
                    },
                    item: {
                        borderLeft: '1px solid #dee2e6',
                        borderRight: '1px solid #dee2e6',
                    }
                }}
                style={{
                    borderTop: '1px solid #dee2e6'
                }}
                value={formValue}
            >

                <Accordion.Item value="shipping">
                    
                    <Accordion.Control>
                        Shipping Address
                    </Accordion.Control>

                    <Accordion.Panel>

                        <AddressForm
                            type="shipping"
                        />

                        <Button
                            w={200}
                            mx='auto'
                            mt={24}
                            onClick={() => setFormValue('billing')}
                        >
                            Next
                        </Button>

                    </Accordion.Panel>

                </Accordion.Item>

                <Accordion.Item value="billing">
                    
                    <Accordion.Control>
                        Billing Address
                    </Accordion.Control>

                    <Accordion.Panel>

                        <AddressForm
                            type="billing"
                        />

                        <Flex
                            gap={16}
                            mt={24}
                            wrap='wrap'
                            align='center'
                            justify='center'
                        >

                            <Button
                                w={200}
                                onClick={() => setFormValue('shipping')}
                                variant="outline"
                            >
                                Back
                            </Button>

                            <Button
                                w={200}
                                onClick={() => setFormValue('payment')}
                            >
                                Next
                            </Button>

                        </Flex>

                    </Accordion.Panel>

                </Accordion.Item>

                <Accordion.Item value="payment">
                    
                    <Accordion.Control>
                        Payment
                    </Accordion.Control>

                    <Accordion.Panel>

                        <PaymentForm />

                        <Flex
                            gap={16}
                            mt={24}
                            wrap='wrap'
                            align='center'
                            justify='center'
                        >

                            <Button
                                w={200}
                                onClick={() => setFormValue('billing')}
                                variant="outline"
                            >
                                Back
                            </Button>

                            <Button
                                w={200}
                                onClick={() => setFormValue('confirm')}
                            >
                                Next
                            </Button>

                        </Flex>

                    </Accordion.Panel>

                </Accordion.Item>

                <Accordion.Item value="confirm">
                    
                    <Accordion.Control>
                        Confirm
                    </Accordion.Control>

                    <Accordion.Panel>

                        <SubmissionForm
                            onClick={() => setFormValue('payment')}
                        />

                    </Accordion.Panel>

                </Accordion.Item>

            </Accordion>

        </form>
    )
}