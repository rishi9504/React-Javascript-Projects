import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
function Sidebar() {
    return (
        <div className="={styles.sidebar}">
            <Logo/>
            <AppNav/>
            <p>List of Cities</p>
            <footer className={styles.footer}>
                <p className={styles.copyright}>
                    &copy; Copyright 2027 by WorldWise. All rights reserved.
                </p>
            </footer>
            </div>
    )
}
export default Sidebar;