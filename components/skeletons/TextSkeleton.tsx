import styles from './skeletons.module.css'

export default function TextSkeleton() {
  return (
    <>
        <div className={styles.text}></div>
        <div className={styles.text}></div>
        <div className={styles.text}></div>
    </>
  )
}
