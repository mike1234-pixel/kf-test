import { useState } from "react"
import { SiteI } from "interfaces/Site"
import { Site } from "components/Site"
import styles from "./SiteList.module.css"

interface SortProps {
  data: SiteI[]
}

export const SiteList = ({ data }: SortProps) => {
  const [sortBy, setSortBy] = useState<string>("name")
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const sortedData = [...data].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name)
    } else if (sortBy === "size") {
      return a.power - b.power
    }
    return 0
  })

  const handleSortChange = (option: string) => {
    setSortBy(option)
    setIsOpen(false)
  }

  return (
    <div className={styles.root}>
      <div className={styles.selectBox}>
        <div id='label' className={styles.label}>
          Sort By
        </div>
        <div
          className={styles.select}
          role='listbox'
          aria-expanded={isOpen}
          aria-labelledby='label'
        >
          <div
            className={styles.selectedOption}
            onClick={() => setIsOpen(!isOpen)}
          >
            {sortBy}
          </div>
          {isOpen && (
            <div className={styles.dropdownMenu}>
              <div onClick={() => handleSortChange("name")}>Name</div>
              <div onClick={() => handleSortChange("size")}>Size</div>
            </div>
          )}
        </div>
      </div>
      <div>
        <ul className={styles.list}>
          {sortedData.map((item) => {
            return (
              <li key={item.id} className={styles.listItem}>
                <Site site={item} />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
