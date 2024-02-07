import { Service } from 'components/Service';
import statusIconGood from '../../assets/statusIconGood.svg';
import styles from './SiteList.module.css';

const SiteList: React.FunctionComponent<{}> = (props) => {
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
                <Service />
                <Service />
            </div>
        </div>
    </div>;
};

export default SiteList;