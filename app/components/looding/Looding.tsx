
import {Card, Skeleton} from "@nextui-org/react";
export default function Looding() {
  return (
    <Card className=" w-[300px] space-y-5 p-4" >
      <Skeleton className="rounded-lg">
        <div className="h-32 rounded-lg bg-default-300"></div>
      </Skeleton>
      <Skeleton className="rounded-lg w-48   ">
        <div className="h-5 rounded-lg bg-default-300 "></div>
      </Skeleton>
      <Skeleton className="rounded-lg w-32   ">
        <div className="h-5 rounded-lg bg-default-300 "></div>
      </Skeleton>
    </Card>
  );
}
