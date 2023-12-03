import { Footer } from "../Footer/component";
import { Header } from "../Header/component";
import styles from "./styles.module.css";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.layout}>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
