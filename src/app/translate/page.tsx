'use client'

import { useTranslation } from 'react-i18next'
import i18n from '@/i18n'

const Transalate = () => {
    const { t } = useTranslation()

    return (
        <div>
            <h1>{t('hello', { name: 'Ridwan' })}</h1>
            <button onClick={() => i18n.changeLanguage('th')}>TH</button>
            <button onClick={() => i18n.changeLanguage('en')}>EN</button>
        </div>
    )
}

export default Transalate