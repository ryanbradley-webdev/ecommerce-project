import styles from './skeletons.module.css'

export default function ImgSkeleton({
    aspectRatio,
    width,
    mx,
    radius
}: {
    aspectRatio: string,
    width: string,
    mx: string,
    radius?: boolean
}) {
    return (
        <div
            className={styles.img}
            style={{
                aspectRatio,
                width,
                marginInline: mx,
                borderRadius: radius ? '8px' : ''
            }}
        ></div>
    )
}