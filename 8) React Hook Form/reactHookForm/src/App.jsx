import { useForm } from "react-hook-form"
import './App.css'

function App() {
  // Extracted different states from useStateHook()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <form action="">
      <div className="">
        <label htmlFor="">First Name</label>
        <input type="text" {...register("firstName")} />
      </div>
      <div className="">
        <label htmlFor="">Middle Name</label>
        <input type="text" {...register("middleName")} />
      </div>
      <div className="">
        <label htmlFor="">Last Name</label>
        <input type="text" {...register("lastName")} />
      </div>
    </form>
  )
}

export default App
