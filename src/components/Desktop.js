import React, { useState, useEffect } from 'react'
import Notepad from './Notepad';
import '../App.css';
import { EventEmitter } from './EventEmitter';
import { Modal } from '@react95/core';
import { Progman37, FolderExe2, FolderFile, InfoBubble, Wintrust103, Network2, QuestionBubble, Time, Timedate200, Url105 } from '@react95/icons';
import DesktopIcon from './DesktopIcon';
// import File from './Custom_notepad/Explorer/Item';
import Explorer from './Custom_notepad/Explorer/Explorer';
function WebsiteDesktop(props) {

    const isMobile = window.innerWidth < 850;
    const [openEditors, setOpenEditors] = useState([]);

    const [closeInfo, setCloseInfo] = useState(true);


    const editors = [
        { id: 'about', name: 'Aboutme.txt', ico: <QuestionBubble />},
        { id: 'programs', name: 'Programs', ico: <FolderExe2 /> },
        { id: 'etf', name: 'ETF Network', ico: <Network2 /> },
        { id: 'randomness', name: 'Randomness', ico: <Url105 /> },
        { id: 'timelock', name: 'Timelock Encryption', ico: <Time /> },
        { id: 'dtxs', name: 'Delayed Transactions', ico: <Timedate200 /> },
        { id: 'card', name: 'CARDBUSINESS.txt', ico: <FolderFile /> },
        { id: 'project', name: 'PROJECT EXPLORER', ico: <FolderFile /> }
    ];

    useEffect(() => {
        setOpenEditors([
            { id: 'card', name: 'CARDBUSINESS.txt', ico: <FolderFile /> },
            { id: 'about', name: 'Aboutme.txt', ico: <QuestionBubble />},
            
        ]);

        editors.forEach(editor => {
            EventEmitter.subscribe(editor.id, () => {
                openNotepad(editor)
            });
        });
        // eslint-disable-next-line
    }, []);

    const getNextX = (n) => {
        return `${35 + 5 * n}%`
    }

    const getNextY = (n) => {
        return `${15 + 5 * n}%`
    }

    const closeNotepad = (id) => {
        setOpenEditors(openEditors.filter(editor => editor.id !== id));

    };

    const openNotepad = (item) => {
        setOpenEditors(prevEditors => {
            if (!prevEditors.some(editor => editor.id === item.id)) {
                return [...prevEditors, item];
            }
            return prevEditors;
        });
    };

    return (
        <>
        {/* <Explorer/> */}
        { closeInfo && (
            <Modal
                icon={<InfoBubble />}
                title={`info`}
                closeModal={() => setCloseInfo(false)}
                style={{
                    left: isMobile ? '50%' : '10%',
                    top: isMobile ? '30%' : '25%',
                    width: isMobile ? '90%' : 450,
                }}>
                <div className='centered'>
                <span>This website is best viewed on a laptop or PC. double click icon to open</span>
                </div>
            </Modal>
        )}
        {openEditors.map((editor, idx) => (
            <Notepad
                key={editor.id}
                closeNotepad={() => closeNotepad(editor.id)}
                ico={editor.ico}
                selectedItem={editor}
                isMobile={isMobile}
                left={getNextX(idx)}
                top={getNextY(idx)}
            />
        ))}
        
        <div className='init-icos'>
            <DesktopIcon ico={<Progman37 />} text="Aboutme" eventType={'about'}/>
            <DesktopIcon ico={<Wintrust103 />} text="BusinessCard" eventType={'card'}/>
            <DesktopIcon ico={<FolderFile />} text="Project" eventType={'project'}/> 
        </div>
        
    </>
    )
}

export default WebsiteDesktop