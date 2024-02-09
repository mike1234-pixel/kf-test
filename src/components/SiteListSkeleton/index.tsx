import styles from "./SiteListSkeleton.module.css"

export const SiteListSkeleton = () => {
  return (
    <div className={styles.root}>
      <div className={styles.text}>
        <div className={styles.iconLoading}></div>
        <div>
          <div className={styles.siteNameLoading}></div>
          <div className={styles.powerLoading}></div>
        </div>
      </div>
      <div className={styles.servicesLoading}></div>
    </div>
  )
}
