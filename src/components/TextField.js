import React, { useEffect } from 'react'
import Cities from './cities'
import { render } from '@testing-library/react'

export default class TextField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            District: []
        }
    }
    componentDidUpdate() {
        fetch(`https://indian-cities-api-nocbegfhqg.now.sh/cities?District=${this.props.value}`)
            .then(response => response.json()).then(res => this.setState({
                District: res
            }))
    }

    render() {
        console.log(this.state.District)
        return (
            <>
                <div className="container">
                    <h2 className="text-center">Indian Cities</h2>
                    <div className="form-group">
                        <input type={this.props.type} name={this.props.name} value={this.props.value} className="form-control" placeholder={this.props.placeholder} onChange={this.props.onChange} />
                    </div>

                    <Cities />
                </div>
            </>
        )
    }
}
