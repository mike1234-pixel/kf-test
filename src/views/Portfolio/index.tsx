import { getSites } from 'api/sites'
import SiteList from 'components/SiteList'
import Header from 'components/Header'
import SiteMap from 'components/SiteMap'
import { useEffect, useState } from 'react'
import { Site } from '../../interfaces/Site'
import styles from './styles/Portfolio.module.scss'

export default function Portfolio() {
    const { shell, apiResponse } = styles

    const [sites, setSites] = useState<Array<Site>>([])
    useEffect(() => { getSites().then(setSites) }, [])

    return (
        <div className={shell}>
            <Header></Header>
            <SiteMap></SiteMap>
            <SiteList></SiteList>
            <p>Site API Response</p>
            <pre className={apiResponse}>
                {JSON.stringify(sites, null, "   ")}
            </pre>
        </div>
    )
}