import React, { Component } from 'react'
import data from '../data'
import UserInfo from './userInfo'

class UserDisplay extends Component {
    constructor() {
        super()
        this.state = {
            currentIndex: 0
        }
    }

    nextIndex() {
        let index = this.state.currentIndex
        if (index < data.length - 1) {
            this.setState({ currentIndex: index + 1 })
        }
    }

    previousIndex() {
        let index = this.state.currentIndex
        if (index > 0) {
            this.setState({ currentIndex: index - 1 })

        }
    }

    
    render() {
        return (
            <div className='User-display'>
                <UserInfo currentUser={data[this.state.currentIndex]} />
                <div className='button-container'>
                    <button onClick={() => this.previousIndex()}> &lt; Previous </button>
                    <button onClick={() => this.nextIndex()}> Next &gt; </button>
                </div >
            </div >
        )
    }

}

export default UserDisplay