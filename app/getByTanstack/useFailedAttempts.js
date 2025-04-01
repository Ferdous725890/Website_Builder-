import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFailedAttempts = () => {
  const { data: failedAttempts = [], refetch: refetchAttempts } = useQuery({
    queryKey: ["failedAttempts"],
    queryFn: async () => {
                    const res = await axios.get(`http://localhost:5000/failedAttempts`)
                    return res.data
    },
  });
  return [failedAttempts,refetchAttempts]
};

export default useFailedAttempts;