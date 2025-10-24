import './style.css'

const Ornament = ({ right = false }: { right?: boolean }) => {
    return (
        <div className={`ornament-container ${right ? 'right' : 'left'}`}>
            <div />
            <div />
            <div />
        </div>
    );
}

export default Ornament;