const UserProfile = () => {
    return <div>
        <div className="container w-[500px] mx-auto">
            <h1 className="my-10 text-2xl font-bold text-slate-900">Welcome User</h1>
            <form>
                <div className="flex justify-start flex-col mb-4">
                    <label htmlFor="username" className="mb-1 font-medium">User Name</label>
                    <input type="text" id="username" placeholder="Edit User Name" className="border bg-slate-200 px-3 py-2 rounded-md outline-none" />
                </div>
                <div className="flex justify-start flex-col mb-4">
                    <label htmlFor="email" className="mb-1 font-medium">Email</label>
                    <input type="email" id="email" placeholder="Edit Email" className="border bg-slate-200 px-3 py-2 rounded-md outline-none" />
                </div>
                <div className="flex justify-start flex-col mb-4">
                    <label htmlFor="password" className="mb-1 font-medium">Password</label>
                    <input type="password" id="password" placeholder="Edit Password" className="border bg-slate-200 px-3 py-2 rounded-md outline-none" />
                </div>
                <div className="flex justify-start flex-col mb-4">
                    <label htmlFor="c-password" className="mb-1 font-medium">Confirm Password</label>
                    <input type="password" id="c-password" placeholder="Edit Confirm Password" className="border bg-slate-200 px-3 py-2 rounded-md outline-none" />
                </div>
                <div className="flex justify-end mb-4 mt-7 gap-3">
                    <button type="submit" className="btn bg-orange-500 px-3 py-2 rounded-md text-white">Update</button>
                    <button type="submit" className="btn bg-slate-900 px-3 py-2 rounded-md text-white">Cancel</button>
                </div>
            </form>
        </div>
    </div>
}

export default UserProfile