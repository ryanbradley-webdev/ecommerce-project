import { Button } from '@mantine/core'
import { Link } from 'react-router-dom'

export default function ProductBtn({ id }: { id: string }) {
    return (
        <Link to={`/products/${id}`}>
            <Button
                fullWidth
                mt={16}
                variant='outline'
            >
                Explore
            </Button>
        </Link>
    )
}