import React from 'react'
import setShowMenu from './Navigation'
import { Link } from "react-router-dom"

function NavigationMenu(){
    return (
        <div>
            <div className="py-3 mx-3 font-semibold text-center text-lg">
                قسم أمراض الدم
            </div>
            <ul className='m-auto w-[90%] text-center text-[#D30000] font-semibold'>
                <li>
                    <Link to="/" className="py-3 border-t border-b border-black block" onClick={() => setShowMenu(false)}>
                        الصفحة الرئيسية
                    </Link>
                </li>
                <li>
                    <Link to="/batch" className="py-3 border-b border-black block" onClick={() => setShowMenu(false)}>
                        Batch 
                    </Link>
                </li>
                <li>
                    <Link to="/registration" className="py-3 border-b border-black block" onClick={() => setShowMenu(false)}>
                        Registration & ESR
                    </Link>
                </li>
                <li>
                    <Link to="/cbc" className="py-3 border-b border-black block" onClick={() => setShowMenu(false)}>
                        CBC
                    </Link>
                </li>
                <li>
                    <Link to="/abnormal" className="py-3 border-b border-black block" onClick={() => setShowMenu(false)}>
                        Abnormal
                    </Link>
                </li>
                <li>
                    <Link to="/coagulation" className="py-3 border-b border-black block" onClick={() => setShowMenu(false)}>
                        Coagulation
                    </Link>
                </li>
                <li>
                    <Link to="/special" className="py-3 border-b border-black block" onClick={() => setShowMenu(false)}>
                        Special
                    </Link>
                </li>
                <li>
                    <Link to="/result" className="py-3 border-b border-black block" onClick={() => setShowMenu(false)}>
                        Result
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu