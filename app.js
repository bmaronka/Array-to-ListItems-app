const data = {
    users: [
        {
            id: 1,
            age: 29,
            name: 'John',
            sex: 'male',
        },
        {
            id: 2,
            age: 31,
            name: 'Claudia',
            sex: 'female',
        },
        {
            id: 3,
            age: 21,
            name: 'Mark',
            sex: 'male',
        },
        {
            id: 4,
            age: 21,
            name: 'Kate',
            sex: 'female',
        }
    ]
};

const Item = ({ user }) => (
    <div className='userInfo'>
        <h1>User: {user.name}</h1>
        <p>Info about user</p>
        <p>User age: <strong>{user.age}</strong></p>
        <p>User sex: {user.sex}</p>
    </div>
)

class ListItems extends React.Component {
    state = {
        select: 'all',
    }

    handleUsersFilter(option) {
        this.setState({
            select: option,
        })
    }

    usersList = () => {
        let users = this.props.data.users;
        switch (this.state.select) {
            case 'all':
                return users.map(user => <Item user={user} key={user.id} />);
            case 'female':
                users = users.filter(user => user.sex === 'female')
                return users.map(user => <Item user={user} key={user.id} />);
            case 'male':
                users = users.filter(user => user.sex === 'male')
                return users.map(user => <Item user={user} key={user.id} />);
            default:
                return 'Something went wrong';
        }
    }

    render() {
        return (
            <>
                <button onClick={this.handleUsersFilter.bind(this, 'all')}>All</button>
                <button onClick={this.handleUsersFilter.bind(this, 'female')}> Women</button>
                <button onClick={this.handleUsersFilter.bind(this, 'male')}> Men</button>
                {this.usersList()}
            </>
        )
    }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById('root'));

//let users = this.props.data.users
// users = users.filter((user) => user.sex === 'female')
// const Items = users.map(user => <Item key={user.id} user={user} />);