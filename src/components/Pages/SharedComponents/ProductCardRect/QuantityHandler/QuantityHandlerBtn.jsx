export function QuantityHandlerButton({ onClick, disabled, icon }) {
    return (
        <button className='bg-yellow-400 px-2 py-0.5 disabled:bg-gray-400 font-bold'
            onClick={onClick} disabled={disabled} >
            {icon}
        </button>
    );
}