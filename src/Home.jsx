import styles from './App.module.css'
import img from './img/social-media.svg'

export function Home(props) {
    return (
        <div className={styles.container}>
            <div className={styles.leftLogin}>
                <h1>Se cadastre e conecta-se<br /> com o restante do universo.</h1>
                <img src={img} alt="" className={styles.imgSocial} />
            </div>
            <div className={styles.rigthLogin}>
                <form className={styles.form}>
                    <h1 >LOGIN</h1>
                    <div className={styles.textfield}>
                        <label htmlFor='usuario'>Usuário</label>
                        <input type="email" name="usuario" id='usuario' placeholder="Nome ou E-mail" onChange={(e) => props.setUser(e.target.value)} />
                    </div>
                    <div className={styles.textfield}>
                        <label >Senha</label>
                        <input type="password" name="senha" placeholder="Senha" onChange={(e) => props.setPassword(e.target.value)} required={true} />
                    </div>
                    <button className={styles.buttonLogin} onClick={props.handleUser} >Login</button>
                </form>
            </div>
        </div>
    )
}