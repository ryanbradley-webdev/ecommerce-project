import { Text } from '@mantine/core'
import { IconTrashX } from '@tabler/icons-react'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

export default function RemoveBtn({
    id
}: {
    id: string
}) {
    const { removeItemFromCart } = useContext(CartContext)

    const localStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        color: 'var(--color-red)',
        cursor: 'pointer'
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>, id: string) => {
            e.stopPropagation()

            e.preventDefault()

            removeItemFromCart(id)
    }

  return (
    <div
        onClick={e => handleClick(e, id)}
        style={localStyles}
    >
        <IconTrashX size={20} color='var(--color-red)' />
        <Text
            color='var(--color-red)'
        >
            Remove
        </Text>
    </div>
  )
}
