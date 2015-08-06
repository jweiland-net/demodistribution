
# Default PAGE object:
page = PAGE

## Favicon
page.shortcutIcon = {$resDir}/Public/Icons/favicon.ico

## CSS Dateien laden
page.includeCSS {
	normalize = {$resDir}/Public/Css/normalize.min.css
	main = {$resDir}/Public/Css/main.css
}

## JavaScript laden
page.includeJSlibs {
	modernizr = {$resDir}/Public/JavaScript/vendor/modernizr-2.8.3-respond-1.4.2.min.js
}

page.includeJSFooterlibs {
	jquery = {$resDir}/Public/JavaScript/vendor/jquery-1.11.2.min.js
}

page.includeJSFooter {
	main = {$resDir}/Public/JavaScript/main.js
}

page.10 = FLUIDTEMPLATE
page.10 {
	partialRootPath = {$resDir}/Private/Partials
	layoutRootPath = {$resDir}/Private/Layouts

	variables {
		contentMain < styles.content.get
		contentAside < styles.content.get
		contentAside.select.where = colPos = 1
		contentAside.stdWrap {
			wrap = <aside>|</aside>
			required = 1
		}
	}

	#file = {$resDir}/Private/Templates/DefaultTemplate.html
}

page.10.file.stdWrap.cObject = CASE
page.10.file.stdWrap.cObject {
	key.data = levelfield:-1, backend_layout_next_level, slide
	key.override.field = backend_layout

	# Default Template
	default = TEXT
	default.value = {$resDir}/Private/Templates/DefaultTemplate.html

	1 < .default

}
