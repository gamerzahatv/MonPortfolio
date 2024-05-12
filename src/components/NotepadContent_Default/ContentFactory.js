import React from 'react'
import About from './About_content/About'
import Programs from './Programs'
import EtfInfo from './Etf'
import Randomness from './Randomness'
import Timelock from './Timelock'
import DelayedTxs from './DelayedTxs'
import NotepadBusinessCard from './Business_card/Notepad_businesscard'
import Project_explorer from './Project_github/Project_explorer'
function ContentFactory({ id, isMobile }) {

    switch (id) {
        case 'about':
            return <About />
        case 'programs':
            return <Programs />
        case 'etf':
            return <EtfInfo />
        case 'randomness':
            return <Randomness />
        case 'timelock':
            return <Timelock />
        case 'dtxs':
            return <DelayedTxs />
        case 'card' :
            return <NotepadBusinessCard/>
        case 'project' :
            return <Project_explorer/>
        default:
            return (<div></div>);
    }
}

export default ContentFactory