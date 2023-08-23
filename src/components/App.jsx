import UserPage from "pages/UserPage/UserPage";
import s from './app.module.css'

export const App = () => {
  return (
    <div className={s.container}>
      <input type="text" className={s.input} />
      <button type='button' className={s.button}>To your IT life</button>
      
      <UserPage/>
    </div>
  )
}
