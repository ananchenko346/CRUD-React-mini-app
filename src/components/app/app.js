import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Frank L.', salary: 1300, increase: true, like: false, id: 1 },
                { name: 'Eden H.', salary: 700, increase: false, like: true, id: 2 },
                { name: 'Didier D.', salary: 900, increase: true, like: false, id: 3 },
                { name: 'John T.', salary: 1100, increase: false, like: true, id: 4 },
                { name: 'Peter C.', salary: 1100, increase: true, like: false, id: 5 },
                { name: 'Romelu L.', salary: 1200, increase: false, like: true, id: 6 },
                { name: 'Kai H.', salary: 900, increase: true, like: false, id: 7 },
                { name: 'Ashley.', salary: 700, increase: false, like: true, id: 8 },
                { name: 'Juan M.', salary: 1000, increase: false, like: false, id: 9 },
                { name: 'Florent M.', salary: 1500, increase: true, like: false, id: 10 },
                { name: 'Michael E.', salary: 1400, increase: false, like: true, id: 11 },
                { name: 'Michael B.', salary: 1200, increase: true, like: false, id: 12 },
                { name: 'Fernando T.', salary: 800, increase: false, like: true, id: 13 },
                { name: 'David L.', salary: 500, increase: true, like: false, id: 14 },
                { name: 'Cesar A.', salary: 1400, increase: false, like: true, id: 15 },
            ], 
            term: '',
            filter: 'all'
        }

        this.maxId = 17;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            like: false,
            increase: false,
            id: this.maxId++
        }

        if (name.length >= 3 && salary !== '' && salary !== '0') {
            this.setState(({ data }) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            });
        } else (alert('Введите корректные значения:'));
       
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmployees = (arr, term) => {
        if (term.length === 0) {
            return arr;
        }

        return arr.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterPost = (arr, filter) => {
        switch(filter) {
            case 'rise':
                return arr.filter(item => item.like);
            case 'more1000':
                return arr.filter(item => item.salary > 1000); 
            default: 
                return arr;   
        }
    }

    onFilterSel = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const allEmployees = this.state.data.length;
        const increasedEmployees = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmployees(data, term), filter);

        return (
            <div className="app">
                <AppInfo
                allEmployees={allEmployees}
                    increasedEmployees={increasedEmployees}
                />

                <div className="search-panel">
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <AppFilter
                        filter={filter}
                        onFilterSel={this.onFilterSel}
                    />
                </div>
                <EmployersList data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployersAddForm
                    onAdd={this.addItem} />
            </div>
        )
    }
}

export default App;