interface inputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

export default function Input({ name, type, placeholder, value }: inputProps) {
  return (
    <>
      <input
        className='w-full outline-none py-2 px-4 border border-gray-200'
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
}
