import React from 'react';
import classes from './PersonDescription.module.css';

function PersonDescription(props) {
    return (
        <div className={ classes.container }>
            <p className={ classes.description }>
                { 'A change strategy is characterised by a willingness to take risks, a need to show mastery, a need for recognition and to achieve results. Ambitious ambitions and a thirst for influence sometimes lead to revolutionary developments. If this path ends in victory, the winners are not judged.' }
            </p>
        </div>
    );
}

export default PersonDescription;