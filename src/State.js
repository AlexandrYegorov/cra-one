Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore

@AlexandrYegorov
bogutski
/
fe1
1
01
Code Issues 0 Pull requests 0 Actions Projects 0 Wiki Security Insights
fe1/src/Content.jsx
@bogutski bogutski props callback
1b946be 43 seconds ago
32 lines (24 sloc)  644 Bytes

import React from 'react';

function Content(props) {

    let name = 'Initial';

    const clickButtonHandler = (value) => {
        props.bc(name + value);
        console.log('Clicked! ' + name);
    };

    const inputHandler = (e) => {
        name = e.target.value;
        console.log(e.target.value);
    };

    return (
        <main>
            <div className="container">
                <h1>First app</h1>
                {name}
                <input type="text" onChange={inputHandler} />

                <button onClick={() => clickButtonHandler(1)}>Add one</button>
                <button onClick={() => clickButtonHandler(2)}>Add two</button>

            </div>
        </main>
    );
}

export default Content;
