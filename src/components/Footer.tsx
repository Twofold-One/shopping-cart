import styles from './styles/Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <h2>
                Made by
                <a
                    href="https://github.com/Twofold-One"
                    target="_blank"
                    rel="noreferrer"
                >
                    Twofold-One
                </a>
            </h2>
        </div>
    );
};

export default Footer;
