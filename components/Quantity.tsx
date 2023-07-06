import { Button, Text } from '@mantine/core'

export default function Quantity({
    quantity,
    addOne,
    subtractOne,
    disabled
}: {
    quantity: number,
    addOne: () => void,
    subtractOne: () => void,
    disabled?: boolean
}) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}
        >
            
            <Button
                h={20}
                w={20}
                p={0}
                display='flex'
                style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onClick={subtractOne}
                variant='outline'
                disabled={disabled}
            >
                -
            </Button>

            <Text>
                {quantity}
            </Text>

            <Button
                h={20}
                w={20}
                p={0}
                display='flex'
                style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onClick={addOne}
                variant='outline'
            >
                +
            </Button>

        </div>
    )
}