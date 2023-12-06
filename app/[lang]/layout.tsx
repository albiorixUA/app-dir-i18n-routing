import { Metadata } from "next";
import { i18n } from "../../i18n-config";
import { mainDescription, mainTitle } from "../metadata/localeMetadata";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function Root({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}

export async function generateMetadata({
  params,
}: Readonly<{ params: { lang: string } }>): Promise<Metadata> {
  return {
    title: mainTitle[params.lang],
    description: mainDescription[params.lang],
  };
}
