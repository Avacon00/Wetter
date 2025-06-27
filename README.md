Wetter-App Pro
- Eine moderne und interaktive Wetter-App, die aktuelle Wetterdaten, eine 5-Tage-Vorhersage und zusätzliche Umgebungsinformationen für jeden Ort der Welt anzeigt. Das Projekt wurde mit reinem HTML, CSS und JavaScript entwickelt und legt Wert auf eine saubere Benutzeroberfläche und intuitive Bedienung.

✨ Features
- Aktuelles Wetter: Zeigt Temperatur, "gefühlte" Temperatur, Wetterbeschreibung, Luftfeuchtigkeit, Windgeschwindigkeit, Luftdruck sowie Sonnenauf- und -untergangszeiten an.
- Suche nach Ort: Suchen Sie nach einem beliebigen Stadtnamen oder einer deutschen Postleitzahl (PLZ).
- 5-Tage-Vorhersage: Eine übersichtliche Vorschau der kommenden fünf Tage mit Wettersymbol und Höchst-/Tiefsttemperaturen.
- Luftqualitätsindex (AQI): Stellt den AQI-Wert farblich und textlich dar (von "Gut" bis "Sehr Schlecht").
- Dynamischer Hintergrund: Die Hintergrundfarbe der App passt sich dynamisch an die aktuelle Wetterlage an.
- Letzte Suche speichern: Die App merkt sich die letzte erfolgreiche Suche und lädt die Daten beim erneuten Öffnen automatisch.
- Teilen-Funktion: Teilen Sie das aktuelle Wetter über die native Teilen-Funktion Ihres Geräts (sofern unterstützt).
- Responsives Design: Optimierte Darstellung auf Desktops, Tablets und mobilen Geräten.
- Lade-Indikator: Ein animierter Spinner zeigt an, während die Daten von der API geladen werden.

🛠️ Technologien
- HTML5: Für die Grundstruktur der Webseite.
- CSS3: Für das Styling, Layout (Flexbox) und die Animationen.
- Vanilla JavaScript (ES6+): Für die gesamte Anwendungslogik, inklusive async/await für API-Anfragen.
- OpenWeatherMap API: Stellt die Wetter-, Vorhersage- und Luftqualitätsdaten bereit.
- Flaticon & Font Awesome: Für die Icons in der Benutzeroberfläche.

Browser-APIs:
- localStorage: Zum Speichern der letzten Suche.
- Web Share API: Für die Teilen-Funktion.

🚀 Benutzung
- Öffnen Sie die index.html-Datei in einem beliebigen modernen Webbrowser.
- Suchen Sie nach einem Ort: Geben Sie einen Stadtnamen oder eine 5-stellige deutsche Postleitzahl in das Suchfeld ein und drücken Sie die Enter-Taste oder klicken Sie auf den Such-Button.
- Ansicht genießen: Die App zeigt Ihnen das aktuelle Wetter und die Vorhersage an.

🔑 API-Schlüssel
- Derzeit wird im Code ein Test-API-Schlüssel von OpenWeatherMap verwendet.
- Wichtig: Für den produktiven Einsatz oder eine eigene Weiterentwicklung sollten Sie diesen durch Ihren eigenen, kostenlosen API-Schlüssel ersetzen.
- Sie finden den Schlüssel in der script-Sektion in der folgenden Zeile:
- const API_KEY = 'XYZ'; // (test API only, please replace with your own)
