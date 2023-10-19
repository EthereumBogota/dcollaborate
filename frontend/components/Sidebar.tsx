import React from 'react'

const Sidebar = (props:any) => {
    return (
        <div className="flex flex-row gap-10">
            <div className="w-full max-w-[18rem]">
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
            </div>

        <div className="flex flex-col p-4 w-full">
            {props.topmenu}
            
            <div className="w-fit">
                <label htmlFor="sidebar-mobile-fixed" className="btn btn-primary sm:hidden">Open Sidebar</label>
            </div>

            <div className="grid grid-cols-2 gap-4 my-4">
                <div className="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center">+</div>

                <div className="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center">+</div>
                <div className="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center">+</div>
                <div className="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center">+</div>
                <div className="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center">+</div>
                <div className="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center">+</div>
                <div className="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center">+</div>
                <div className="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center">+</div>
                <div className="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center">+</div>
                <div className="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center">+</div>
                <div className="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center">+</div>
                <div className="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center">+</div>
            </div>
	</div>

        </div>
    )
}

export default Sidebar
