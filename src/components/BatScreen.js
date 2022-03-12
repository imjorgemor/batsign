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
        <>
            {
                !toggle
                    ? <div>
                        <BatTrailer handleToggle={handleToggle} />
                    </div>
                    : <div className='main'>
                        <section>
                            <BatCanvas
                                user={user}
                            />
                            <BatForm
                                user={user}
                                setUser={setUser}
                            />
                        </section>
                        <footer className="footer">
                            <BatDisclaimer />
                        </footer>
                    </div>
            }
        </>
    )
}

export default BatScreen