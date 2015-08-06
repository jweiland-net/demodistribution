# Demo-Distribution #

Diese Demo-Distribution wurde während eine Video-Kurses entwickelt.
Sie finden die Video unter https://jweiland.net/video-anleitungen/typo3/typo3-projekte-verwalten/templates-als-distribution.html

## Installation ##

* Beginnen Sie mit einem leeren TYPO3-Projekt
* Aktualisieren Sie im Extension Manager die Liste der Extensions
* wechseln Sie in das Verzeichnis typo3conf/ext/
* Klonen Sie dieses Git-Repo dort hinein
* Im Extension-Manager die Extension mydemodistribution aktivieren

Abhängige Extensions wie realurl und powermail etc. werden automatisch installiert und aktiviert

### .htaccess ###
Es wird eine minimale Beispiel .htaccess mitgeliefert. Diese liegt nach der Installation im Verzeichnis fileadmin/mydemodistribution/htaccess.txt
Diese benötigen Sie unter Umständen für RealUrl, falls in Ihrem Projektverzeichnis noch keine .htaccess liegen sollte.
Um diese Datei zu verwenden, kopieren Sie sie in das Root-Verzeichnis des TYPO3-Projekts un benennen Sie sie um in .htaccess, z.B. mit dem Befehl

_cp fileadmin/mydemodistribution/htaccess.txt ./.htaccess_