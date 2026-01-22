'use client'

import i18n from '@/i18n'
import { Select } from 'antd'
import { useState } from 'react'

const TopBar = () => {
    const [lang, setLang] = useState("th")

    const handleChange = (value: string) => {
        i18n.changeLanguage(value)
        setLang(value)
    }


    return (
        <div className='top-bar'>
            <Select
                value={lang}
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                    { value: 'th', label: 'ไทย' },
                    { value: 'en', label: 'EN' },
                ]}
            />
        </div>
    )
}
export default TopBar
