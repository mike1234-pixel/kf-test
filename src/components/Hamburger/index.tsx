import "hamburgers/dist/hamburgers.css"
import "./Hamburgers.css"

interface HamburgerProps {
  onClick: () => void
  collapse: boolean
}

export const Hamburger = ({ onClick, collapse }: HamburgerProps) => {
  return (
    <button
      onClick={onClick}
      className={`hamburger hamburger--collapse ${collapse ? "is-active" : ""}`}
      type='button'
    >
      <span className='hamburger-box'>
        <span className='hamburger-inner'></span>
      </span>
    </button>
  )
}
