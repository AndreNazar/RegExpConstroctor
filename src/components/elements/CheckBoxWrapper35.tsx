import styles from '../../scss/CheckBoxWrapper35.module.scss'

const CheckBoxWrapper35 = (props: any) => {
  return (
    <div className={styles.checkbox_wrapper_35}>
      <input 
      checked={props.value}
      onChange={() => props.onChange()}
      name={props.name} 
      id={props.name}
      type="checkbox" 
      className={styles.switch} />
      <label htmlFor={props.name}>
        <span  className={styles.switch_x_text}>{props.title}{props.specialStyle ? "" :" - "}</span>
        <span className={styles.switch_x_toggletext}>
          <span className={styles.switch_x_unchecked}>
            <span className={styles.switch_x_hiddenlabel}>Unchecked: </span>{props.specialStyle ? "" :"Выкл."}
          </span>
          <span className={styles.switch_x_checked}>
            <span className={styles.switch_x_hiddenlabel}>Checked: </span>{props.specialStyle ? "" :"Вкл."}
          </span>
        </span>
      </label>
    </div>
  )
}

export default CheckBoxWrapper35
