import React from 'react'

const BatForm = ({ user, setUser, handleToggle }) => {

    return (
        <div className='input'>
            <h1>ENTER YOUR NAME</h1>
            <form>
                <input
                    className='batinput'
                    type="text"
                    name="user"
                    value={user}
                    onChange={e => setUser(e.target.value.toUpperCase())}
                    autoComplete="off"
                />
            </form>
            {
                user.length > 0 &&
                <button className='bat-button clear' onClick={() => setUser("")}>CLEAR</button>

            }

        </div>
    )
}

export default BatForm