import { Select } from '@beercode/common-frontend'
import { Locale } from 'src/types/localization'
import { useLocale } from 'src/hooks/useLocale'
import { useRouter } from 'next/router'

export const LangSelector: React.FC = () => {
  const router = useRouter()
  const { changeLocale } = useLocale()
  const options = [
    {
      value: Locale.EN,
      label: 'En',
    },
    {
      value: Locale.RU,
      label: 'Ru',
    },
  ]

  return (
    <>
      <Select
        options={options}
        defaultValue={router.locale === 'en' ? options[0] : options[1]}
        onChange={() =>
          router.locale === 'en'
            ? changeLocale(Locale.RU)
            : changeLocale(Locale.EN)
        }
      />
    </>
  )
}
