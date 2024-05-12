import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchSessionSliceSignUp } from "../../redux/slices/fetchSessionSliceAsync";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const onSubmit = async (data) => {
    try {
      console.log(data);
      dispatch(fetchSessionSliceSignUp(data));
      // navigate("/");
    } catch (error) {
      console.log(error, "Error");
    }
  };
  return (
    <form
      className="flex items-center flex-col gap-6 max-w-lg mx-auto p-10 bg-gray-100 rounded-lg shadow-md my-9"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, name }, fieldState: { error } }) => (
          <label className="block text-sm font-medium text-gray-700">
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="name"
              onChange={onChange}
              name={name}
            />

            <span>{error}</span>
          </label>
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, password }, fieldState: { error } }) => (
          <label className="block text-sm font-medium text-gray-700">
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="password"
              onChange={onChange}
              name={password}
            />

            <span>{error}</span>
          </label>
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, password }, fieldState: { error } }) => (
          <label className="block text-sm font-medium text-gray-700">
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Confirm password"
              onChange={onChange}
              name={password}
            />

            <span>{error}</span>
          </label>
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, email }, fieldState: { error } }) => (
          <label className="block text-sm font-medium text-gray-700">
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="email"
              onChange={onChange}
              name={email}
            />

            <span>{error}</span>
          </label>
        )}
      />
      <Controller
        control={control}
        name="age"
        render={({ field: { onChange, age }, fieldState: { error } }) => (
          <label className="block text-sm font-medium text-gray-700">
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="age"
              onChange={onChange}
              name={age}
            />

            <span>{error}</span>
          </label>
        )}
      />
      <button
        className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default SignUp;
