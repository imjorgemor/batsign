import { useState } from 'react'
import BatCanvas from './BatCanvas'
import BatDisclaimer from './BatDisclaimer';
import BatForm from './BatForm';
import Spline from '@splinetool/react-spline';

const BatScreen = () => {

    const [user, setUser] = useState("");

    return (
        <div className='main'>
            <div className='bat3ds'>
                {
                    user.length === 0 &&
                    <Spline scene="https://prod.spline.design/nxoiI9Qt9BaQc07A/scene.splinecode" />
                }
            </div>

            <BatCanvas
                user={user}
            />
            <BatForm
                user={user}
                setUser={setUser}
            />
            <BatDisclaimer />
        </div>
    )
}

export default BatScreen;