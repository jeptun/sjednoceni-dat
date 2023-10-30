import { useQuery } from "@tanstack/react-query";
import { GetApiLogin } from "../api/apiCall";
import Dataloader from "./Dataloader";

export default function LoginDB() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["LoginDB"],
    queryFn: () => GetApiLogin()
  });

  if (isPending) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data, "LoginDB");
  return (
    <div>
      <Dataloader timeData={data} />
    </div>
  );
}
