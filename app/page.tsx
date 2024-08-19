export default function Home() {
  return (
    <main className='flex max-w-4xl py-5 px-4 mx-auto'>
      <h3>Postgres</h3>
      <form action='' method='post'>
        <div className='form-control'>
          <label htmlFor='username'>Username</label>
          <input type='text' className='input block' />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input type='email' className='input' />
        </div>
        <div className='form-control'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </main>
  );
}
