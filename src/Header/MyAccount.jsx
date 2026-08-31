import React from "react";

import { loggedInContext } from "../Registration/LoggedIn"

export default function MyAccount() {

  const [photo, setPhoto] = React.useState(null);
  const { loggedIn } = React.useContext(loggedInContext)
  const { user } = React.useContext(loggedInContext)
  const { setUser } = React.useContext(loggedInContext)


  const handleSubmit = async (e) => {
    const response = await fetch("http://localhost:5000/api/auth/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: user.name,
        email: user.email
      }),
    });
    const data = await response.json()

    if(response.status===200){
      alert("Changes made succesfully!")
    }
  }

  return (
    loggedIn && (<>
      <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-stone-200 p-8">
          <h1 className="text-2xl font-semibold text-stone-900 mb-1">My Account</h1>
          <p className="text-sm text-stone-500 mb-8">Manage your profile details</p>

          <div className="mb-5">
            <p className="text-sm font-medium text-stone-500 mb-1">Name</p>
            <input type="text" value={user.name}
              className="border-2 border-black p-2 rounded w-70"
              onChange={(e) => setUser({ ...user, name: e.target.value })} />
          </div>

          <div>
            <p className="text-sm font-medium text-stone-500 mb-1">Email</p>
            <input type="email" value={user.email}
              className="border-2 border-black p-2 rounded w-70"
              onChange={(e) => setUser({ ...user, email: e.target.value })} />
          </div>

          <button className="w-70 bg-black text-white mt-4 p-2"
            onClick={handleSubmit}>Save changes</button>
        </div>
      </div>
    </>)
  )
}