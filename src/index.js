import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';

const App = () => {
    return(
        <div className="ui container comments">
            <Comment author="Mary" date="Today at 06:00 PM" />
            <Comment author="John" date="Today at 10:29 AM" />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));