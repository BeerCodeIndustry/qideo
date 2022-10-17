import { Select } from '@beercode/common-frontend'
import { Locale } from 'src/types/localization'
import { useLocale } from 'src/hooks/useLocale'
import { useRouter } from 'next/router'
import { LngOption } from './LngSelector.types'

export const LngSelector: React.FC = () => {
  const router = useRouter()
  const { changeLocale } = useLocale()
  const lngOptions: LngOption[] = [
    {
      value: Locale.EN,
      label: Locale.EN,
    },
    {
      value: Locale.RU,
      label: Locale.RU,
    },
  ]
  const onChange = (obj: LngOption): void => {
    changeLocale(obj.value)
  }

  return (
    <Select
      options={lngOptions}
      defaultValue={lngOptions.filter(lng => lng.value === router.locale)}
      onChange={option => onChange(option as LngOption)}
    />
  )
}
