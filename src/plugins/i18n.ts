import VueI18n from 'vue-i18n'
import messages from 'src/i18n'
import Vue from 'vue'

export default ({ app }) => {
	Vue.use(VueI18n)

	// Set i18n instance on app
	app.i18n = new VueI18n({
		locale: 'en',
		fallbackLocale: 'en',
		messages
	})
}