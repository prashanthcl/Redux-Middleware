import React from 'react';
class ClassComponent extends React.Component{
    render(){
        return(
            <React.Fragment>
                <i><h2>Welcome to Class Component---- StateFull Component</h2></i>
                <header>
                <h2>Header Section</h2>
                </header>
                <main>
                    <aside>
                    <h2>Text</h2>
                    </aside>
                    <aside>
                        <h2>Text</h2>
                    </aside>
                </main>
                <footer>
                {`Welcome to Footer Section`}
                </footer>
                </React.Fragment>
        )
    }
}
export default ClassComponent;