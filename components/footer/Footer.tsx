import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>

            <span>
                Designed and developed by <a href="https://ryanbradleyportfolio.com" target="_blank" rel="noopener noreferrer">Ryan Bradley</a>
            </span>

            <span>
                Designed with Mantine and Tabler
            </span>

        </footer>
    )
}