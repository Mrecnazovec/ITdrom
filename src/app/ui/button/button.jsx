import style from './button.module.scss'

const Button = (text) => {
 return <button className={style.btn}><span>{text.text}</span></button>
}

export default Button