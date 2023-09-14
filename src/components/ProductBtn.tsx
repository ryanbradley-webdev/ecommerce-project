import { Button } from '@mantine/core'
import { Link } from 'react-router-dom'

export default function ProductBtn({ id }: { id: string }) {
    return (
        <Link 
            to={`/products/${id}`}
            style={{
                width: '100%'
            }}    
        >
            <Button
                fullWidth
                variant='outline'
            >
                Explore
            </Button>
        </Link>
    )
}