import { useTranslation as useNextTranslation } from 'next-i18next'

interface UseTranslationType {
  t: (str: string) => string
}

export const useTranslation = (ns?: string): UseTranslationType => {
  const { t: translate, ready } = useNextTranslation(ns)

  const t = (str: string): string => {
    return ready ? translate(str) : ''
  }

  return { t }
}
