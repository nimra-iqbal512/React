import { useDispatch, useSelector } from "react-redux"
// useDispatch is to trigger action
// useSelector is to access state value

const Home = () => {
    const dispatch = useDispatch();
    const {c} = useSelector(state => state.custom);

    const addBtn = () => {
        dispatch({
            type: "increment",
        });
    };
    const addBtn25 = () => {
        dispatch({
            type: "incrementByValue",
            payload: 25,
        });
    };
    const subBtn = () => {
        dispatch({
            type: "decrement",
        });
    };

  return (
    <div>
        <h2>{c}</h2>

          <button onClick={addBtn}>Increment</button>
          <button onClick={addBtn25}>Increment by 25</button>
          <button onClick={subBtn}>Decrement</button>
    </div>
  )
}
export default Home