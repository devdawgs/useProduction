import { notFound } from "next/navigation";
import { getBrandData } from "@/lib/brands";
import { PageLayout } from "@/components/pageLayout";
import { Logo } from "@/components/logo";
import { Header } from "@/components/header";
import { Button } from "@/components/button";

export default async function SubdomainPage({
  params,
}: {
  params: Promise<{ domain: string }>;
}) {
  const { domain } = await params;
  const domainData = await getBrandData(domain);

  if (!domain) {
    notFound();
  }

  return (
    <PageLayout>
      <Logo src={domainData.logo} />
      <Header>{domainData.name}</Header>
      <Button className={"bg-primary"}>Primary</Button>
      <Button className={"bg-secondary"}>Secondary</Button>
    </PageLayout>
  );
}
