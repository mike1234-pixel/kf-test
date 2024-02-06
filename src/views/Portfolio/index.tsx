import { getSites } from 'api/sites';
import SiteList from 'components/SiteList';
import Header from 'components/Header';
import SiteMap from 'components/SiteMap';
import { useEffect, useState } from 'react';
import { Site } from '../../interfaces/Site';
import { siteLinks } from 'constants/siteLinks';
import styles from './styles/Portfolio.module.scss';

export default function Portfolio() {
    const { shell, apiResponse } = styles;

    const [sites, setSites] = useState<Array<Site>>([]);
    useEffect(() => { getSites().then(setSites); }, []);

    return (
        <div className={shell}>
            <Header>
                {
                    siteLinks.map((siteLink) => {
                        return <li key={siteLink.id}>
                            <a href={siteLink.url} target="_blank" rel="noreferrer">{siteLink.name}</a>
                        </li>;
                    })
                }
            </Header>
            <SiteMap></SiteMap>
            <SiteList></SiteList>
            <p>Site API Response</p>
            <pre className={apiResponse}>
                {JSON.stringify(sites, null, "   ")}
            </pre>
        </div>
    );
}