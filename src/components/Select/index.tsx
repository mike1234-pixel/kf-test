import { Dispatch, SetStateAction } from "react"
import classNames from "classnames"
import styles from "./Select.module.css"

interface SelectProps {
  options: string[]
  isOpen: boolean
  sortBy: string
  setIsOpen: Dispatch<SetStateAction<boolean>>
  handleChange: (option: string) => void
}

export const Select = ({
  options,
  isOpen,
  sortBy,
  setIsOpen,
  handleChange,
}: SelectProps) => {
  return (
    <div className={styles.selectBox}>
      <div id='label' className={styles.label}>
        Sort By
      </div>
      <div
        className={classNames(styles.select, isOpen && styles.selectOpen)}
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
              <div key={option} onClick={() => handleChange(option)}>
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
