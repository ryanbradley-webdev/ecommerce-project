import { useParams } from 'react-router-dom'

export default function ProductDescription() {
    const { id } = useParams()

    return (
        <main>
            {id}
        </main>
    )
}