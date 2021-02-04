import { useTheme } from 'next-themes'
import styles from './ThemeChanger.module.css'

export default function ThemeChange(): JSX.Element {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <label htmlFor='themeCheckbox' className={styles.switch}>
      <input
        id='themeCheckbox'
        type='checkbox'
        className={styles.input}
        checked={resolvedTheme === 'dark'}
        onChange={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      />

      <span className={styles.slider} />
      <span className={resolvedTheme === 'dark' ? styles.iconDark : styles.iconLight}>{resolvedTheme === 'dark' ? '🌙' : '☀️'}</span>
    </label>
  )
}
