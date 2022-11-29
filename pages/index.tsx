import { trpc } from "../utils/trpc";
export default function IndexPage() {
  const david = trpc.findDavid.useQuery();

  console.log("David", david);

  if (david.isLoading) {
    return <>Loading...</>;
  }

  if (david.isError) {
    return <>Error</>;
  }

  return (
    <div>
      <p>{david.data}</p>
    </div>
  );
}
