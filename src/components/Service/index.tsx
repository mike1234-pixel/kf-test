import { SiteService } from "interfaces/Site";
import clock from "../../assets/clock.svg";
import styles from "./Service.module.css";
import classNames from 'classnames';

interface ServiceProps {
    service: SiteService | null;
    sequence: string;
}

export const Service = ({ service, sequence }: ServiceProps) => {

    const statusClassName = service?.service.toLowerCase().replace(' ', '-');

    return <div className={classNames(styles.root, styles[`${statusClassName}`])}>
        <div>
            <p className={styles.sequence}>{sequence}</p>
            <p className={styles.name}>{service?.service}</p>
        </div>
        <img src={clock} alt="clock icon" />
    </div>;
};