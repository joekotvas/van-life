import React from 'react'
import { useParams } from 'react-router-dom'

import '../../styles/Vans.css'

import VanDetailView from './VanDetail'
import VansCatalog from './VansCatalog'

export default function VansView() {
  const params = useParams()

  const [vans, setVans] = React.useState([])

  React.useEffect(() => {
    document.title = 'Vans | #VANLIFE'
    fetch('/api/vans')
      .then(res => res.json())
      .then(data => {
        setVans(data.vans)
      })
  }, [])

  if (params.id) {
    return <VanDetailView vans={vans} vanId={params.id - 1} />
  }

  return <VansCatalog vans={vans} />
}
