import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  username: string;
  email: string;
};

export default function Register() {
  const { register, handleSubmit, formState: errors } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} method='post'>
        <div className='form-control'>
          <label htmlFor='username'>Username</label>
          <input
            {...register("username", {
              required: "The username is required",
              minLength: {
                value: 3,
                message: "The Username must have at least 3 characters",
              },
            })}
            type='text'
            className='bg-transparent border rounded-md px-5 py-2 w-full outline-none mt-1 placeholder:bg-slate-300 text-white'
          />
          <p>{JSON.stringify(errors)}</p>
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            className='bg-transparent border rounded-md px-5 py-2 w-full outline-none mt-1 placeholder:bg-slate-300 text-white'
          />
        </div>
        <div className='form-control'>
          <button
            type='submit'
            className='bg-red-500 px-5 py-3 rounded-md cursor-pointer my-1'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
