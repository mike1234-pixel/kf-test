import { ReactNode } from "react"
import styles from "./Tooltip.module.css"

interface TooltipProps {
  text: ReactNode | ReactNode[]
  children: ReactNode | ReactNode[]
}

export const Tooltip = ({ text, children }: TooltipProps) => (
  <div className={styles.tooltipContainer}>
    {children}
    <div className={styles.tooltip}>{text}</div>
  </div>
)
