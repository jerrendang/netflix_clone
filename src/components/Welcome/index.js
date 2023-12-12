import './Welcome.css';

const Welcome = ({setCookie}) => {
    setCookie('visited', true, {maxAge: 3600})
    return (
        <div className='welcomePage'>
            Welcome Page
        </div>
    )
}

export default Welcome;
