import { defineFormKitConfig } from '@formkit/vue'
import { ru } from '@formkit/i18n'
import { genesisIcons } from '@formkit/icons'

export default defineFormKitConfig({
  // rules: {},
  locales: { ru },
  locale: 'ru',
  icons: {
    ...genesisIcons,
  }
  // etc. 
})