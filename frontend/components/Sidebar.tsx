import React from 'react'

const Sidebar = () => {
    return (
        <aside className="sidebar h-full justify-start">
            <section className="sidebar-content h-fit min-h-[20rem] overflow-visible">
                <nav className="menu rounded-md">
                    <section className="menu-section px-4">
                        <span className="menu-title">Main menu</span>
                        <ul className="menu-items">
                            
                            <li className="menu-item">
                                <span>Transactions</span>
                            </li>

                            <li className="menu-item menu-active">
                                <span>Loans</span>
                            </li>

                            <li className="menu-item">
                                <span>Scoring</span>
                            </li>

                        </ul>
                    </section>
                </nav>
            </section>

        </aside>      
    )
}

export default Sidebar
