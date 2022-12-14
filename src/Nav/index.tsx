import React, { Component } from 'react'
interface Istate {
    isTrue: boolean
}
export default class index extends Component<any, Istate> {
    state = {
        isTrue: true
    }
    render() {
        return (
            <div>
                <Nav title="标题" change={() => this.setState({ isTrue: !this.state.isTrue })} />
                <Slider isTrue={this.state.isTrue} />
            </div>
        )
    }
}
interface Iprops {
    title: string,
    change: () => void
}
class Nav extends Component<Iprops, any> {
    render() {
        return (
            <button onClick={() => this.props.change()}>{this.props.title}</button>
        )
    }
}
interface SProps {
    isTrue: boolean
}
class Slider extends Component<SProps, any> {
    render() {
        return (
            <div>
                {this.props.isTrue&&'slider'}
            </div>
        )
    }
}
