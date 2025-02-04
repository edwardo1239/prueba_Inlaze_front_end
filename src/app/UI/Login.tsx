'use client'
import Image from 'next/image'
import styles from './Login.module.css'
import persona from '../../../public/persona.png'
import { useState } from 'react'
const url = "http://localhost:3001/users"

type propsType = {
    handleloginButton: () =>  void
}
export default function Login(props:propsType) {

    const [choose, setChoose] = useState(true)
    const [username, setUsername] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [email, setEmail] = useState<string>()

    const guardar_usuario = async () => {
        try {
            const request = {
                username: username,
                password: password,
                email: email
            }
            const response = await fetch(url, {
                method: 'POST', // Método HTTP
                headers: {
                    'Content-Type': 'application/json' // Tipo de contenido que se está enviando
                },
                body: JSON.stringify(request) // Convertir el objeto de datos a una cadena JSON
            })
            if(response.status !== 201){
                throw new Error(`Code ${response.status}: ${response.statusText}`)
            }
            alert("Created successfully")
            setUsername('')
            setPassword('')
            setEmail('')
        } catch (err) {
            if (err instanceof Error) {
                alert("Error creando usuario " + err.message)
            }
        }
    }
    const login = async () => {
        try{
            const request = {
                username: username,
                password: password,
            }
            const response = await fetch(`${url}/login`, {
                method: 'POST', // Método HTTP
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(request), 
                credentials: 'include' 
            })
            if(response.status !== 200){
                throw new Error(`Code ${response.status}: ${response.statusText}`)
            }
            alert("login successfully")
            setUsername('')
            setPassword('')
            props.handleloginButton()
        } catch(err){
            if(err instanceof Error){
                alert(err.message)
            }
        }
    }
    return (
        <>
            {choose ?
                <div className={styles.container}>
                    <div className={styles.modal_container}>
                        <div className={styles.section_login}>
                            <button onClick={props.handleloginButton}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0.25C8.07164 0.25 6.18657 0.821828 4.58319 1.89317C2.97982 2.96451 1.73013 4.48726 0.992179 6.26884C0.254225 8.05042 0.061142 10.0108 0.437348 11.9021C0.813554 13.7934 1.74215 15.5307 3.10571 16.8943C4.46928 18.2579 6.20656 19.1865 8.09787 19.5627C9.98919 19.9389 11.9496 19.7458 13.7312 19.0078C15.5127 18.2699 17.0355 17.0202 18.1068 15.4168C19.1782 13.8134 19.75 11.9284 19.75 10C19.7473 7.41498 18.7192 4.93661 16.8913 3.10872C15.0634 1.28084 12.585 0.25273 10 0.25ZM10 18.25C8.36831 18.25 6.77326 17.7661 5.41655 16.8596C4.05984 15.9531 3.00242 14.6646 2.378 13.1571C1.75358 11.6496 1.5902 9.99085 1.90853 8.3905C2.22685 6.79016 3.01259 5.32015 4.16637 4.16637C5.32016 3.01259 6.79017 2.22685 8.39051 1.90852C9.99085 1.59019 11.6497 1.75357 13.1571 2.37799C14.6646 3.00242 15.9531 4.05984 16.8596 5.41655C17.7661 6.77325 18.25 8.3683 18.25 10C18.2475 12.1873 17.3775 14.2843 15.8309 15.8309C14.2843 17.3775 12.1873 18.2475 10 18.25ZM12.0306 6.78063L8.81032 10L12.0306 13.2194C12.1003 13.2891 12.1556 13.3718 12.1933 13.4628C12.231 13.5539 12.2504 13.6515 12.2504 13.75C12.2504 13.8485 12.231 13.9461 12.1933 14.0372C12.1556 14.1282 12.1003 14.2109 12.0306 14.2806C11.9609 14.3503 11.8782 14.4056 11.7872 14.4433C11.6961 14.481 11.5986 14.5004 11.5 14.5004C11.4015 14.5004 11.3039 14.481 11.2128 14.4433C11.1218 14.4056 11.0391 14.3503 10.9694 14.2806L7.21938 10.5306C7.14965 10.461 7.09433 10.3783 7.05658 10.2872C7.01884 10.1962 6.99941 10.0986 6.99941 10C6.99941 9.90144 7.01884 9.80384 7.05658 9.7128C7.09433 9.62175 7.14965 9.53903 7.21938 9.46937L10.9694 5.71937C11.0391 5.64969 11.1218 5.59442 11.2128 5.5567C11.3039 5.51899 11.4015 5.49958 11.5 5.49958C11.5986 5.49958 11.6961 5.51899 11.7872 5.5567C11.8782 5.59442 11.9609 5.64969 12.0306 5.71937C12.1003 5.78906 12.1556 5.87178 12.1933 5.96283C12.231 6.05387 12.2504 6.15145 12.2504 6.25C12.2504 6.34855 12.231 6.44613 12.1933 6.53717C12.1556 6.62822 12.1003 6.71094 12.0306 6.78063Z" fill="#F6F6F6" />
                                </svg>
                                <p>Back</p>
                            </button>
                            <div className={styles.sigin_login_button}>
                                <div className={`${styles.sign_button} ${styles.button_left_border}`} onClick={() => setChoose(true)}>Sign up</div>
                                <div className={`${styles.login_button} ${styles.button_right_border}`} onClick={() => setChoose(false)}>Login</div>
                            </div>
                            <div className={styles.inputs_container}>
                                <label className={styles.inputs_data}>
                                    Usuario:
                                    <input value={username} type="text" onChange={(e) => setUsername(e.target.value)} />
                                </label>
                                <label className={styles.inputs_data}>
                                    Contraseña:
                                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </label>
                                <label className={styles.inputs_data}>
                                    Correo:
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </label>
                            </div>
                            <div className={styles.container_sigin_button}>
                                <button onClick={guardar_usuario}>
                                    Sign In
                                </button>
                            </div>
                        </div>
                        <div className={styles.greeting_container}>
                            <h1>Welcome to Quickbet Movies!</h1>
                            <p>🎬 Ready to unlock a universe of cinematic delights? Sign up now and start your journey with us!</p>
                            <Image height={450} src={persona} alt='A person greeting' />
                        </div>
                    </div>
                </div>
                :
                <div className={styles.container}>
                    <div className={styles.modal_container}>
                        <div className={styles.section_login}>
                            <button>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0.25C8.07164 0.25 6.18657 0.821828 4.58319 1.89317C2.97982 2.96451 1.73013 4.48726 0.992179 6.26884C0.254225 8.05042 0.061142 10.0108 0.437348 11.9021C0.813554 13.7934 1.74215 15.5307 3.10571 16.8943C4.46928 18.2579 6.20656 19.1865 8.09787 19.5627C9.98919 19.9389 11.9496 19.7458 13.7312 19.0078C15.5127 18.2699 17.0355 17.0202 18.1068 15.4168C19.1782 13.8134 19.75 11.9284 19.75 10C19.7473 7.41498 18.7192 4.93661 16.8913 3.10872C15.0634 1.28084 12.585 0.25273 10 0.25ZM10 18.25C8.36831 18.25 6.77326 17.7661 5.41655 16.8596C4.05984 15.9531 3.00242 14.6646 2.378 13.1571C1.75358 11.6496 1.5902 9.99085 1.90853 8.3905C2.22685 6.79016 3.01259 5.32015 4.16637 4.16637C5.32016 3.01259 6.79017 2.22685 8.39051 1.90852C9.99085 1.59019 11.6497 1.75357 13.1571 2.37799C14.6646 3.00242 15.9531 4.05984 16.8596 5.41655C17.7661 6.77325 18.25 8.3683 18.25 10C18.2475 12.1873 17.3775 14.2843 15.8309 15.8309C14.2843 17.3775 12.1873 18.2475 10 18.25ZM12.0306 6.78063L8.81032 10L12.0306 13.2194C12.1003 13.2891 12.1556 13.3718 12.1933 13.4628C12.231 13.5539 12.2504 13.6515 12.2504 13.75C12.2504 13.8485 12.231 13.9461 12.1933 14.0372C12.1556 14.1282 12.1003 14.2109 12.0306 14.2806C11.9609 14.3503 11.8782 14.4056 11.7872 14.4433C11.6961 14.481 11.5986 14.5004 11.5 14.5004C11.4015 14.5004 11.3039 14.481 11.2128 14.4433C11.1218 14.4056 11.0391 14.3503 10.9694 14.2806L7.21938 10.5306C7.14965 10.461 7.09433 10.3783 7.05658 10.2872C7.01884 10.1962 6.99941 10.0986 6.99941 10C6.99941 9.90144 7.01884 9.80384 7.05658 9.7128C7.09433 9.62175 7.14965 9.53903 7.21938 9.46937L10.9694 5.71937C11.0391 5.64969 11.1218 5.59442 11.2128 5.5567C11.3039 5.51899 11.4015 5.49958 11.5 5.49958C11.5986 5.49958 11.6961 5.51899 11.7872 5.5567C11.8782 5.59442 11.9609 5.64969 12.0306 5.71937C12.1003 5.78906 12.1556 5.87178 12.1933 5.96283C12.231 6.05387 12.2504 6.15145 12.2504 6.25C12.2504 6.34855 12.231 6.44613 12.1933 6.53717C12.1556 6.62822 12.1003 6.71094 12.0306 6.78063Z" fill="#F6F6F6" />
                                </svg>
                                <p>Back</p>
                            </button>
                            <div className={styles.sigin_login_button}>
                                <div className={`${styles.login_button} ${styles.button_left_border}`} onClick={() => setChoose(true)}>Sign up</div>
                                <div className={`${styles.sign_button} ${styles.button_right_border}`} onClick={() => setChoose(false)}>Login</div>
                            </div>
                            <div className={styles.inputs_container}>
                            <label className={styles.inputs_data}>
                                    Usuario:
                                    <input value={username} type="text" onChange={(e) => setUsername(e.target.value)} />
                                </label>
                                <label className={styles.inputs_data}>
                                    Contraseña:
                                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </label>
                            </div>
                            <div className={styles.container_sigin_button}>
                                <button onClick={login}>
                                    Login
                                </button>
                            </div>
                        </div>
                        <div className={styles.greeting_container}>
                            <h1>Welcome to Quickbet Movies!</h1>
                            <p>🎬 Ready to unlock a universe of cinematic delights? Sign up now and start your journey with us!</p>
                            <Image height={450} src={persona} alt='A person greeting' />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}