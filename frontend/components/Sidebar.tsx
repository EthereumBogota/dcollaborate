import React from 'react'

const Sidebar = (props:any) => {
    return (
    <div>
     {props.isConnected &&
       <div className="sticky flex h-screen flex-row gap-4 overflow-y-auto rounded-lg sm:overflow-x-hidden">
            <div className="w-full max-w-[18rem]">
                <aside className="sidebar h-full justify-start">
                    <section className="sidebar-content h-fit min-h-[20rem] overflow-visible">
                        <nav className="menu rounded-md">
                            <section className="menu-section px-4">
                                <ul className="menu-items">
                                    <li className="menu-item">
                                        <span>Deposit</span>
                                    </li>
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
            </div>

            <div className="flex flex-col p-4 w-full">
                {props.topmenu}
                
                <div className="w-fit">
                    <label htmlFor="sidebar-mobile-fixed" className="btn btn-primary sm:hidden">Open Sidebar</label>
                </div>

                {props.content}
            </div>
        </div>
      }
    </div>
    )
}

export default Sidebar
