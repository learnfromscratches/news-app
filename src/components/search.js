import styles from "./search.module.css";

const SearchBar =({onType}) =>{
    return(
        <input className={styles.searchBar} placeholder="Search..." onChange={onType}></input>
    )
}
export default SearchBar;