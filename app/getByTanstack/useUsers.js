import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUsers = () => {
  const { data: users = [], refetch: refetchUser } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
                    const res = await axios.get(`https://build-master-server.vercel.app/users`)
                    return res.data
    },
  });
  return [users,refetchUser]
};

export default useUsers;