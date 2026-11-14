import { useEffect } from 'react'

export default function SEO({ title, description }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | Athul Krishnan - SEO Specialist`
      : 'Athul Krishnan | SEO Analyst & Digital Marketing Specialist'
    document.title = fullTitle

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]')
      if (!metaDesc) {
        metaDesc = document.createElement('meta')
        metaDesc.setAttribute('name', 'description')
        document.head.appendChild(metaDesc)
      }
      metaDesc.setAttribute('content', description)
    }
  }, [title, description])

  return null
}
