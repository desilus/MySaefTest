import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Matteo', lastName: 'Anselmi', email: 'matteo.anselmi@saef.it' };
  return (
    <section className="home">
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          type="greeting"
          title="Benvenuto"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Accedi e gestisci la tua azienda e le tue persone"
          />

          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={20.35}
          />
        </header>

        RECENT TRANSACTION
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1235.50}, {currentBalance: 126.50}]}
      />
    </section>
  )
}

export default Home