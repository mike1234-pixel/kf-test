import { Service } from 'components/Service';
import statusIconGood from '../../assets/statusIconGood.svg';
import { Site } from 'interfaces/Site';
import styles from './SiteList.module.css';

interface SiteListProps {
    site: Site;
}

const SiteList = ({ site }: SiteListProps) => {

    return <div className={styles.root}>
        <div className={styles.site}>
            <div className={styles.text}>
                <img src={statusIconGood} alt="status icon" />
                <div>
                    <h2>Kraken Arthur</h2>
                    <span>50 MW</span>
                </div>
            </div>
            <div className={styles.services}>
                <Service service={site.schedules.now} sequence={'now'} />
                <Service service={site.schedules.next} sequence={'next'} />
            </div>
        </div>
    </div>;
};

export default SiteList;