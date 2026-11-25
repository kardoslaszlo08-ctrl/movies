import React from 'react'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosCloseCircle } from 'react-icons/io'
import { NavLink, Outlet } from 'react-router'

export const MyHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinkClass=({isActive}) => `transition-colors hover:text-red-300 ${isActive ? "text-red-500 font-semibold":"text-gray-300"}`

  return (
    <div>
      <header className='bg-gray-950 p-4'>
        <nav className='px-6 max-w-7xl mx-auto'>
        {/*felső sor*/}
          <div className='flex justify-between items-center'>
            
            <div className='text-2xl font-bold'>
              Movie <span className='text-red-500'>Zone</span>
            </div>
            {/*asztali menü */}
            <div className='hidden min-[580px]:flex gap-8'>
              <NavLink to='/' className={navLinkClass}>Kezdőlap</NavLink>
              <NavLink to='/movies'className={navLinkClass}>Filmek</NavLink>
              <NavLink to='/tv'className={navLinkClass}>Sorozatok</NavLink>
              <NavLink to='/person'className={navLinkClass}>Szinészek</NavLink>
              <NavLink to='/search'className={navLinkClass}>Keresés</NavLink>
            </div>
{/*hamburger menu */}
<button onClick={()=>setMenuOpen(!menuOpen)} className='min-[581px]:hidden text-3xl'>
    {menuOpen ? <IoIosCloseCircle />: <GiHamburgerMenu />}
</button>
          </div>
        {/*mobil menü sor*/}
        {menuOpen && (
                      <div className='flex flex-col gap-4 hidden:min-[581px]'>
              <NavLink to='/' className={navLinkClass}>Kezdőlap</NavLink>
              <NavLink to='/movies'className={navLinkClass}>Filmek</NavLink>
              <NavLink to='/tv'className={navLinkClass}>Sorozatok</NavLink>
              <NavLink to='/person'className={navLinkClass}>Szinészek</NavLink>
              <NavLink to='/search'className={navLinkClass}>Keresés</NavLink>
            </div>
        )
        
        }
        </nav>

      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
