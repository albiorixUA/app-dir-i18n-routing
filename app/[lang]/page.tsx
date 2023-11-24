import Link from "next/link";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import Counter from "./components/counter";
import LocaleSwitcher from "./components/locale-switcher";

export default async function IndexPage({
  params: { lang },
}: Readonly<{
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <LocaleSwitcher />
      <p>Current locale: {lang}</p>
      <p>
        This text is rendered on the server:{" "}
        {dictionary["server-component"].welcome}
      </p>
      <Counter dictionary={dictionary.counter} />

      <p>
        <b>Scenario 1 </b>select language which not default `en` when u click on
        Test page with not default locale which is `en` all works as expected
        you see modal page which intercepted from (.)test
      </p>
      <p>
        <b>Scenario 2</b> select default `en` language and click on Test page
        first time u see modal test page. But when u click back and try to click
        again nothing happen, and at consol u can see error{" "}
        <span style={{ color: "red" }}>`Uncaught Error: SEGMENT MISMATCH`</span>
      </p>
      <Link href={`${lang}/test`}>Test page</Link>
    </div>
  );
}
