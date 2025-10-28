import type { Metadata } from "next";
import { getBrandData } from "@/lib/brands";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ domain: string }>;
}): Promise<Metadata> {
  const { domain } = await params;
  const domainData = await getBrandData(domain);

  if (!domainData) {
    return {
      title: "Unknown Domain",
    };
  }

  return {
    title: domainData.name,
    description: `White labeled page for ${domainData.name}`,
  };
}

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ domain: string }>;
}>) {
  const { domain } = await params;
  const domainData = await getBrandData(domain);

  if (!domain) {
    notFound();
  }

  const themeVariables = {
    "--primary": domainData.colors.primary,
    "--secondary": domainData.colors.secondary,
  } as React.CSSProperties;

  return (
    <main style={themeVariables}>
      <Link className={"text-black"} href={"/"}>
        {"< Home"}
      </Link>
      {children}
    </main>
  );
}
