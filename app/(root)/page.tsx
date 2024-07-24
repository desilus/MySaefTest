import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.action';
import React from 'react'

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          type="greeting"
          title="Benvenuto"
          user={loggedIn?.name || 'Guest'}
          subtext="Accedi e gestisci la tua azienda e le tue persone"
          />

          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={12020.35}
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