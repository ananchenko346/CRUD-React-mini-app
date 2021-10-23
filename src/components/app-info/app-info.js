import './app-info.css';

const AppInfo = ({allEmployees, increasedEmployees}) => {
    return (
        <div className="app-info">
            <h1>Список игроков</h1>
            <h2>Общее количество игроков: {allEmployees}</h2>
            <h2>Место в старте: {increasedEmployees}</h2>
        </div>
    )
} 

export default AppInfo;