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

  // Inside 'data', we can see all the input data
  const onSubmit = (data) => {
    console.log("Submitting the form", data);

  }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <label htmlFor="">First Name</label>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          type="text"
          {...register("firstName",
            { required: true,
              minLength: {
                value: 3,
                message: "First name must have at least 3 characters"
              }, 
              maxLength: 20, 
            })
          }
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <br />

      <div className="">
        <label htmlFor="">Middle Name</label>
        <input type="text" {...register("middleName")} />
      </div>
      <br />

      <div className="">
        <label htmlFor="">Last Name</label>
        <input type="text" {...register("lastName")} />
      </div>
      <br />

      <input type="submit" name="" id="" />
    </form>
  )
}

export default App
