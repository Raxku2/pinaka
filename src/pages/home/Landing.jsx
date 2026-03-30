import { h, Component } from 'preact';
import { Header1, IslandNav } from '../../components';

const Landing = ({ children }) => {
    return (
        <>


            {children}


            {/* <!-- BottomNavBar (Dynamic Island Style) --> */}
            <IslandNav />
        </>
    );
};

export default Landing;