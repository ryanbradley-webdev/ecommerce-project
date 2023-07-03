import styles from './header.module.css'

export default function Menu({
    isVisible
}: {
    isVisible: boolean
}) {
    return (
        <nav
            className={styles.menu}
            style={{
                right: isVisible ? '-100%' : '0'
            }}
        >
            Menu
        </nav>
    )
}