import React, {Component} from 'react'


const TableHeader = () => {
    return (
    <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
        </tr>
    </thead>
    )
}

const TableBody = props => {

    const rows = props.characterData.map((row, index) => {
        return (
            <tr key= {index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td> <button onClick = {()=> props.removeData(index)}>Delete </button></td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}

class Table extends Component {

    render() {

        const { characterData , removeData} = this.props

        return(
            <table>
                <TableHeader />
                <TableBody characterData = {characterData} removeData = {removeData} />
            </table>
        )
    }
}

export default Table