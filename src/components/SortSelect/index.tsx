import { Dispatch, SetStateAction } from "react"
import styles from "./SortSelect.module.css"

interface SortSelectProps {
  options: string[]
  isOpen: boolean
  sortBy: string
  setIsOpen: Dispatch<SetStateAction<boolean>>
  handleSortChange: (option: string) => void
}

export const SortSelect = ({
  options,
  isOpen,
  sortBy,
  setIsOpen,
  handleSortChange,
}: SortSelectProps) => {
  return (
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
            {options.map((option) => (
              <div key={option} onClick={() => handleSortChange(option)}>
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
