import { Dispatch, SetStateAction } from "react"
import classNames from "classnames"
import styles from "./Select.module.css"

interface SelectProps {
  options: string[]
  isOpen: boolean
  sortBy: string
  setIsOpen: Dispatch<SetStateAction<boolean>>
  handleChange: (option: string) => void
  labelText: string
  loading?: boolean
}

export const Select = ({
  options,
  isOpen,
  sortBy,
  setIsOpen,
  handleChange,
  labelText,
  loading,
}: SelectProps) => {
  return (
    <div className={styles.selectBox}>
      <div id='label' className={styles.label}>
        {!loading && labelText}
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
          {!loading ? sortBy : <div className={styles.placeholder}></div>}
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
