import { FormApp } from './utils/form-app'

export default function App() {
  const { error, name, checkName, handleSubmit, handleClick } = FormApp()
  return (
    <div className="w-full min-h-screen mt-20">
      <div className="flex justify-center items-center">
        {error.error && (
          <p className="text-red-500 text-sm ml-2">{error.message}</p>
        )}
      </div>

      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="p-2 border border-gray-300 rounded-md"
          />
          <button className="p-2 bg-blue-500 text-white rounded-md">
            Submit
          </button>
        </form>
      </div>

      <div className="flex justify-center items-center mt-10">
        {checkName ? (
          <p className="text-2xl">Hello, {name}</p>
        ) : (
          <p className="text-2xl">Please enter your name</p>
        )}
      </div>

      <div className="flex justify-center items-center mt-5">
        <button
          type="button"
          onClick={handleClick}
          className="p-2 bg-red-500 text-white rounded-md"
        >
          Clear name
        </button>
      </div>
    </div>
  )
}
