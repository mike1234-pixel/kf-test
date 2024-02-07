import SiteList from 'components/SiteList';
import Header from 'components/Header';
import SiteMap from 'components/SiteMap';
import { siteLinks } from 'constants/siteLinks';
import { HeaderLink } from 'components/HeaderLink';
import { useSites } from 'hooks/useSites';
import styles from './styles/Portfolio.module.scss';

export default function Portfolio() {
    const { shell, apiResponse } = styles;

    const { sites } = useSites();

    return (
        <div className={shell}>
            <Header>
                {
                    siteLinks.map((siteLink) => <HeaderLink key={siteLink.id} siteLink={siteLink} />)
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