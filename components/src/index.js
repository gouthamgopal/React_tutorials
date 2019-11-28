import React from 'react';
import ReactDOM from 'react-dom';

// Using Faker JS to import fake data to build the component.
import faker from 'faker';

// Import new components from other files. (Component Nesting!)
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Making comments component using semantic ui classes for modelling the css.
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4 style={{textAlign: 'center', color: 'red'}}>Warning!</h4>
                    <p style={{textAlign: 'center'}}>Are you sure you want to do this?</p>
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} author="Sam" timeStamp="Today at 6:00PM" commentText="Thats a good story!!"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} author="Alex" timeStamp="Today at 4:48PM" commentText="Nice Morale Booster"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} author="Jane" timeStamp="Yesterday at 12:30AM" commentText="Didn't like the summing up."/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)