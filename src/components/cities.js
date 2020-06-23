import React, { Component } from 'react'

export default class Cities extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: '',
            data: [],
            District: []
        }
    }

    handeleChange = e => {
        this.setState({ search: e.target.value }, () => {
            fetch(`https://indian-cities-api-nocbegfhqg.now.sh/cities?District=${this.state.search}`)
                .then(response => response.json()).then(res => this.setState({
                    District: res
                }))
        })

    }

    componentDidMount() {
        fetch(`https://indian-cities-api-nocbegfhqg.now.sh/cities`)
            .then(response => response.json()).then(res => {
                this.setState({ data: res })
            }
            )
    }

    render() {
        return (
            <>
                {/* <form action=""> */}
                <div className="form-group">
                    <input type="text" name="search" value={this.state.search} onChange={this.handeleChange} className="form-control" placeholder='Search City,State & District' />
                </div>
                {/* </form> */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>State</th>
                            <th>District</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            this.state.District.length > 0 ? this.state.District.map((i, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{i.City}</td>
                                        <td>{i.State}</td>
                                        <td>{i.District}</td>
                                    </tr>
                                )
                            }) : this.state.data.map((i, index) => {
                                return (

                                    <tr key={index}>
                                        <td>{i.City}</td>
                                        <td>{i.State}</td>
                                        <td>{i.District}</td>
                                    </tr>
                                )
                            })

                        }
                    </tbody>
                </table>
            </>
        )
    }
}
