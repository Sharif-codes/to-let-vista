import useAxiosPublic from "./useAxiosPublic";


const useSaveUser = async (user) => {
    const axiosPublic= useAxiosPublic()
    const currentUser= {
        email: user.email,
        role: 'user',
        status: 'verified'
    }
    await axiosPublic.put(`/users/${user.email}`, currentUser)
    .then(res=> console.log(res.data))
};

export default useSaveUser;