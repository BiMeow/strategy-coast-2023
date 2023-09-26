import { useRouter } from "next/router";

function MasterPage(props: any) {
  const router = useRouter();

  const { children } = props;

  return (
    <>
      <main className={`MasterPage min-h-screen`}>
        <div className={`pageContent`}>{children}</div>
      </main>
    </>
  );
}

export default MasterPage;
