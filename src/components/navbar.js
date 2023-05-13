import styles from "./navbar.module.css"
import SearchBar from "./search";
const Navbar = () =>{
    return(
        <>
            <div className={styles.navbar}>
                <div className={styles.branding}>
                    <h1><span>Times</span>Now</h1>
                    <a href=" https://newscatcherapi.com/">Powered by  https://newscatcherapi.com/</a>
                </div>
                
                <div className={styles.options}>
                    <ul>
                        <li>Home</li>
                        <li>Trending</li>
                        <li>Categories</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar;