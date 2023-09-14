import styles from './skeletons.module.css'

export default function TitleSkeleton({
    height
}: {
    height: string
}) {
    return (
        <div
            className={styles.title}
            style={{
                height
            }}
        ></div>
    )
}