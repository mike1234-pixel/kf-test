import styles from './styles/site.module.scss'

export default function Site() {
    const { shell } = styles
    return (
        <div className={shell}>
            <p>Site Page</p>
        </div>
    )
}