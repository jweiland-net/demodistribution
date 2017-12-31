# Demo-Distribution #

Diese Demo-Distribution wurde während eine Video-Kurses entwickelt.
Sie finden die Videos unter https://jweiland.net/video-anleitungen/typo3/typo3-projekte-verwalten/templates-als-distribution.html

## Installation ##

* Beginnen Sie mit einem leeren TYPO3-Projekt
* Aktualisieren Sie im Extension Manager die Liste der Extensions
* wechseln Sie in das Verzeichnis typo3conf/ext/
* Klonen Sie dieses Git-Repo dort hinein
* Im Extension Manager die Extension css_styled_content deaktiveren
* Im Extension-Manager die Extension demodistribution aktivieren
* Ggf. noch die statischen Templates von fluid_styled_content und powermail im Root-Template inkludieren

Abhängige Extensions wie realurl und powermail etc. werden automatisch installiert und aktiviert

Sollte danach im Frontend eine Fehlermeldung erscheinen, dass die "Rendering definition" von "Text&Media" fehlt -> Im Installtool ein Database Compare ausführen, danach dort alles Caches leeren (und, sofern vorhanden, den PHP OPCode-Cache).

ACHTUNG: es wird mindestens TYPO3 7.6.2 benötigt!

### .htaccess ###
Es wird eine minimale Beispiel .htaccess mitgeliefert. Diese liegt nach der Installation im Verzeichnis fileadmin/demodistribution/htaccess.txt
Diese benötigen Sie unter Umständen für RealUrl, falls in Ihrem Projektverzeichnis noch keine .htaccess liegen sollte.
Um diese Datei zu verwenden, kopieren Sie sie in das Root-Verzeichnis des TYPO3-Projekts un benennen Sie sie um in .htaccess, z.B. mit dem Befehl

_cp fileadmin/demodistribution/htaccess.txt ./.htaccess_

### RealUrl ###
Es kann (für den Anfang) die automatische Konfiguration von RealUrl verwendet werden.

* Im ExtensionManager in die Konfiguration von RealUrl
* Checkbox bei "Enable automatic configuration" setzen
* Konfiguration speichern (Save-Button)