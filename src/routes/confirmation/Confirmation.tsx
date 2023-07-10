import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router-dom"
import { getOrderById } from '../../../lib/getOrderById'
import { Title } from "@mantine/core"

export default function Confirmation() {
    const [ searchParams ] = useSearchParams()

    const orderId = searchParams.get('orderId')

    const { data: order } = useQuery({
        queryKey: [`order-${orderId}`],
        queryFn: () => getOrderById(orderId)
    })

    return (
        <main>

            <Title
                align="center"
                mb={48}
            >
                Thanks for your order!
            </Title>

            <Title
                align="center"
                size={24}
            >
                Your confirmation number is {orderId}
            </Title>

        </main>
    )
}