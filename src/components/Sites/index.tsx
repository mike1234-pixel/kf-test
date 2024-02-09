import { useState } from "react"
import { SiteI } from "interfaces/Site"
import { SiteList } from "components/SiteList"
import { Select } from "components/Select"
import styles from "./Sites.module.css"

interface SitesProps {
  sites: SiteI[]
}

export const Sites = ({ sites }: SitesProps) => {
  const [sortBy, setSortBy] = useState<string>("name")
  const [isSortSelectOpen, setIsSortSelectOpen] = useState<boolean>(false)

  const sortedData = [...sites].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name)
    }
    if (sortBy === "size") {
      return a.power - b.power
    }
    return 0
  })

  const handleSortChange = (option: string) => {
    setSortBy(option)
    setIsSortSelectOpen(false)
  }

  return (
    <div className={styles.root}>
      <Select
        options={["name", "size"]}
        isOpen={isSortSelectOpen}
        sortBy={sortBy}
        setIsOpen={setIsSortSelectOpen}
        handleChange={handleSortChange}
        labelText='Sort By'
      />
      <div>
        <ul className={styles.list}>
          {sortedData.map((item) => {
            return (
              <li key={item.id} className={styles.listItem}>
                <SiteList site={item} />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
