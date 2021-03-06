import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header'
import ListOrders from '../../components/Listallorders'
import Footer from '../../components/Footer'

const Kitchen = () => {
  const nameLS = JSON.parse(localStorage.getItem('currentUser'))
  const { name, role } = nameLS
  const history = useHistory()

  if (role !== 'kitchen') {
    history.push('/')
    return null
  }
  return (
    <section>
      <Header role={role} name={name} />
      <section className='container-cards'>
        <ListOrders />
      </section>
      <Footer />
    </section>
  )
}

export default Kitchen
