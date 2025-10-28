import { PageLayout } from "@/components/pageLayout";
import { Button } from "@/components/button";
import Link from "next/link";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <PageLayout>
      <Header>View domain</Header>
      <Link href={"/s/burton"}>
        <Button>View Burton</Button>
      </Link>
      <Link href={"/s/oakley"}>
        <Button>View Oakley</Button>
      </Link>
      <Link href={"/s/original"}>
        <Button>View Original Skateboards</Button>
      </Link>
    </PageLayout>
  );
}
