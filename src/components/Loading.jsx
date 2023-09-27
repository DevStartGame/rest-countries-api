import ReactLoading from 'react-loading'

export default function Loading() {
    const LoadingStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh'
    }

    return (
        <div style={LoadingStyle}>
            <ReactLoading type={'spinningBubbles'} color={'#ffffff'} />
        </div>
    )
}
