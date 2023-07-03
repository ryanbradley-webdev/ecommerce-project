import { useParams } from 'react-router-dom'

export default function ProductDescription() {
    const { id } = useParams()

    return (
        <div>
            {id}
        </div>
    )
}