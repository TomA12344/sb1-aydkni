export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">Datenschutzerklärung</h1>
      
      <div className="prose prose-neutral dark:prose-invert">
        <h2>1. Datenschutz auf einen Blick</h2>
        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
          Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
        </p>

        <h3>Datenerfassung auf dieser Website</h3>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Die Kontaktdaten können Sie dem Impressum dieser
          Website entnehmen.
        </p>

        <h2>2. Hosting</h2>
        <p>
          Unser Hoster erhebt in sog. Logfiles folgende Daten, die Ihr Browser
          übermittelt:
        </p>
        <ul>
          <li>IP-Adresse</li>
          <li>Adresse der vorher besuchten Website (Referer)</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Zeitzonendifferenz zur GMT</li>
          <li>Inhalt der Anforderung</li>
          <li>HTTP-Statuscode</li>
          <li>übertragene Datenmenge</li>
          <li>Website, von der die Anforderung kommt</li>
          <li>Browsertyp und Browserversion</li>
          <li>Betriebssystem</li>
        </ul>

        <h2>3. Cookies</h2>
        <p>
          Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr
          Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser
          Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
        </p>

        <h2>4. Newsletter</h2>
        <p>
          Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten,
          benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche
          uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen
          E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden
          sind.
        </p>

        <h2>5. Ihre Rechte</h2>
        <p>Sie haben folgende Rechte:</p>
        <ul>
          <li>Recht auf Auskunft</li>
          <li>Recht auf Berichtigung</li>
          <li>Recht auf Löschung</li>
          <li>Recht auf Einschränkung der Verarbeitung</li>
          <li>Recht auf Datenübertragbarkeit</li>
          <li>Widerspruchsrecht</li>
        </ul>
      </div>
    </div>
  );
}