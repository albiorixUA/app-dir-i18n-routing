import { Locale } from "../../../../i18n-config";

export default function TestPageModal({
  params: { id, lang },
}: {
  params: { id: string; lang: Locale };
}) {
  return (
    <div>
      <h1>
        Test page Modal {id} --- Language {lang}
      </h1>
      <p>This is modal test Intercept route</p>
    </div>
  );
}
