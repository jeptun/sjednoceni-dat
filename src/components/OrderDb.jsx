import { useQuery } from "@tanstack/react-query";
import { GetApiPayments } from "../api/apiCall";
import Dataloader from "./Dataloader";

export default function OrderDb() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["OrderDb"],
    queryFn: () => GetApiPayments()
  });

  if (isPending) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  data.forEach((item) => {
    item.date = item.dateTime;
  });

  //   const redudeDataDate = data.reduce(
  //     (acc, item) => ({
  //       ...acc,
  //       [item.date]: item.dateTime
  //     }),
  //     {}
  //   );

  return (
    <div>
      <Dataloader timeData={data} />
    </div>
  );
}
