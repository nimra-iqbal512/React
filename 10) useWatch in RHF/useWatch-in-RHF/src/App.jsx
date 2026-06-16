import { useForm } from "react-hook-form";
import ConditionalMessage from "./ConditionalMessage";

export default function App() {
  console.log("App Renders");

  const { register, handleSubmit, control } = useForm({
    defaultValues: { role: "guest" } // Recommended for accurate initialization
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Select Role:</label>
      <select {...register("role")}>
        <option value="guest">Guest</option>
        <option value="admin">Admin</option>
      </select>

      {/* Pass control down to separate the re-render scope */}
      <ConditionalMessage control={control} />

      <button type="submit">Submit</button>
    </form>
  );
}
