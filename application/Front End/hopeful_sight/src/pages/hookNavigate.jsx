import { hookNavigate } from 'react-router-dom';

function onClick() {
    const click = hookNavigate();

    const clickListener = () => {
        click('/Cart', { replace: true });
        // Prevents user from going back to the previous page
    };


    return (
        <button onClick={clickListener}>Click me</button>
        
        
    );
}

export default onClick;