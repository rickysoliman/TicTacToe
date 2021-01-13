import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
    display: inline-block;
    margin: auto;
    // font-family: Arial;
    // font-size: 100px;
`;

const Square = styled.div`
    text-align: center;
    font-family: Arial;
    font-size: 100px;
    padding: 10px;
    border: 2px solid black;
    color: ${props => props.contents === '__' ? 'white' : 'black'};
    &:hover {
        cursor: pointer;
    }
`;

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            board: [
                ['__','__','__'],
                ['__','__','__'],
                ['__','__','__']
            ],
            xTurn: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log(e.target.id);
        if (this.state.xTurn) {
            e.target.id = 'X';
        } else {
            e.target.id = 'O'
        }
        // this.setState({
        //     //
        // })
    }

    render() {
        const rows = this.state.board.map((row, i) => {
            const squares = row.map((square, index) => {
                return <Square coordinates={[i, index]} id={[i, index]} onClick={this.handleClick} contents={square}>{square}</Square>
            });
            return <Row>{squares}</Row>
        });
        return <div>{rows}</div>
    }
}

export default Board;