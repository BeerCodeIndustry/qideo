import { Select } from '@beercode/common-frontend'
import { Locale } from 'src/types/localization'
import { useLocale } from 'src/hooks/useLocale'
import { useRouter } from 'next/router'
import { LngOption } from './LngSelector.types'

export const LngSelector: React.FC = () => {
  const locales: Locale[] = Object.values(Locale)
  const router = useRouter()
  const { changeLocale } = useLocale()
  const lngOptions = locales.map<LngOption>(language => ({
    value: language,
    label: language.toUpperCase(),
  }))
  const onChange = (obj: LngOption): void => {
    changeLocale(obj.value)
  }

  return (
    <Select
      options={lngOptions}
      defaultValue={lngOptions.find(lng => lng.value === router.locale)}
      onChange={option => onChange(option as LngOption)}
    />
  )
}
