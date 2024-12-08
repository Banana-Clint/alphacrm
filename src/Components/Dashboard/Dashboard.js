import React, { useState } from 'react';
import './Dashboard.css';
import EmailReader from './EmailReader/EmailReader';
import {EmailComposer} from './EmailComposer/EmailComposer.js';
export default function Dashboard() {
    const [selectedTab, setSelectedTab] = useState('inbox');

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div className="Dashboard-Wrapper">
            <div className="Sidebar">
                <button onClick={() => handleTabChange('inbox')}>All Mail</button>
                <button onClick={() => handleTabChange('new')}>New Message</button>
                <button onClick={() => handleTabChange('drafts')}>Drafts</button>
            </div>
            <div className="MainContent">
                {selectedTab === 'inbox' && <div><EmailReader/></div>}
                {selectedTab === 'new' && <div><EmailComposer/></div>}
                {selectedTab === 'drafts' && <div>Displaying draft messages...</div>}
            </div>
        </div>
    );
}
