import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Counter from './Counter';

const items = [
    {
        text: 'Home',
        link: 'home-page'
    },
    {
        text: 'Products',
        link: 'prod-page'
    },
    {
        text: 'Services',
        link: 'serv-page'
    },
    {
        text: 'Prices',
        link: 'price-page',
        size: 1
    }
];


const c1 = 2, c2 = 5;
const tc = c1 + c2;

function App() {


    const [totalCount, setTotalCount] = useState(tc);

    function countChanges(value){
        console.log('changed!!' + value)

        setTotalCount(value);

    }

    return (
        <div className="App">
            <Header menuItems={items}/>
            Total: {totalCount}
            <Counter startCount={c1} countChanges={countChanges}/>
            <hr/>
            <Counter startCount={c2} countChanges={countChanges}/>
            <Footer />
        </div>
    );
}

export default App;
