import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все игроки'},
        {name: 'rise', label: 'Место в старте'},
        {name: 'more1000', label: 'З/П больше 1000$'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button 
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterSel(name)}
                type="button">
                    {label}
            </button>
        )
    });


    return (
        <div className="btn-group">
            {buttons}
            </div>
    )
}

export default AppFilter;