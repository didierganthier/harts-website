import React from 'react'

const ButtonForward = (props) => {
    const { backgroundColor, textColor = "text-[#222222]", textChildren } = props;

    return (
        <button className={`${textColor} ${backgroundColor} text-xs border border-[#222222] flex items-center rounded-full px-3 py-1 uppercase`}>
            {textChildren}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
    )
}

export default ButtonForward
