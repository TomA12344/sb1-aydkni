export default function ImprintPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">Impressum</h1>
      
      <div className="prose prose-neutral dark:prose-invert">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Max Mustermann<br />
          Musterstraße 123<br />
          12345 Musterstadt
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: +49 (0) 123 44 55 66<br />
          E-Mail: info@example.com
        </p>

        <h2>Redaktionell verantwortlich</h2>
        <p>
          Max Mustermann<br />
          Musterstraße 123<br />
          12345 Musterstadt
        </p>

        <h2>EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>

        <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§
          8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
          übermittelte oder gespeicherte fremde Informationen zu überwachen oder
          nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
          hinweisen.
        </p>
      </div>
    </div>
  );
}