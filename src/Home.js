import React from 'react';

import Header from './Header';
import EntryHeader from './EntryHeader';
import Entry from './Entry';
import EntryContent from './EntryContent';
import Footer from './Footer';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header title="homeHeader"/>
                <EntryHeader title="homeEntryHeader"/>
                <Entry title="homeEntry"/>
                <EntryContent title="homeEntryContent"/>
                <Footer title="homeFooter"/>
               <p>home success</p>
            </div>
        );
    }
}

export default Home;