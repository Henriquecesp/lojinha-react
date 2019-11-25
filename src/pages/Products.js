import TopnavComponent from '../components/TopnavComponent'
import React, { Component } from 'react'
import Card from '../components/Card'
import Title from '../components/Title';

export default class Products extends Component {
    render() {
        return (
            <React.Fragment>
                <Title name="Nova" title="Coleção"/>
                <TopnavComponent />
                <Card />
            </React.Fragment>
        );
    }
}
