import * as React from 'react';
import Popup from '../components/Popups/popup';

const Home: React.FC = () => {
    const [popupValues, setPopupValues] = React.useState({});
    const [popupVisible, setPopupVisible] = React.useState(false);

    return (
        <>
            <button onClick={() => (popupVisible ? setPopupVisible(false) : setPopupVisible(true))}>Open Popup</button>
            { popupVisible && <Popup
                key={'TestPopup'}
                active={ popupVisible }
                size={600}
                title={'Test Popup'}
                topClose={() => setPopupVisible(false)}
                labelAligment={'center'}
                theme={{ primary: '#fff', primaryDarken: '#000', secondary: '#000', secondaryDarken: '#000', text: '#000' }}
                inputs={[{ type: 'text', label: 'Test Input', name: 'test_input', value: '' }]}
                bottomButtons={[{ name: 'confirm', text: 'Test Button', onClick: () => {} }]}
                RetrieveValues={(values) => {
                    setPopupValues(values);
                    setPopupVisible(false);
                }}
            />}
        </>
    );
};
export default Home;
