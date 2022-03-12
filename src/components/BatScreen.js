import { useState } from 'react'
import BatCanvas from './BatCanvas'
import BatDisclaimer from './BatDisclaimer';
import BatForm from './BatForm'
import BatTrailer from './BatTrailer';

const BatScreen = () => {

    const [user, setUser] = useState("");
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className='main'>
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

export default BatScreen