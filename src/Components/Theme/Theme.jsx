import styles from './Theme.module.css';

export function Theme(){
    function handleValueChange(){
      const meta = document.querySelector('meta[name="color-scheme"]');
      meta.setAttribute("content",event.target.value);
    }
    return(
        <div className={styles.Theme}>
            <span>Theme:</span>
            <select defaultValue="Light dark" onChange={handleValueChange}>
                <option value="Light dark">System</option>
                <option value="Light">Light</option>
                <option value="Dark">Dark</option>
            </select>
        </div>
    )
}