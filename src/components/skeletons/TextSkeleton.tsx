import styles from './skeletons.module.css'

export default function TextSkeleton({
    multiple
}: {
    multiple?: number
}) {
    const divs = Array(multiple || 3).fill(null)

    return (
        <>
            {divs.map((_, idx) => (
                <div className={styles.text} key={idx}></div>
            ))}
        </>
  )
}
