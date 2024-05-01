import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import fetchSessionSliceAsync from "../../redux/slices/fetchSessionSliceAsync";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const onSubmit = async (data) => {
    try {
      console.log(data);
      dispatch(fetchSessionSliceAsync(data));
      // navigate("/");
    } catch (error) {
      console.log(error, "Error");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, name }, fieldState: { error } }) => (
          <label>
            <input placeholder="name" onChange={onChange} name={name} />

            <span>{error}</span>
          </label>
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, password }, fieldState: { error } }) => (
          <label>
            <input placeholder="password" onChange={onChange} name={password} />

            <span>{error}</span>
          </label>
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignIn;
