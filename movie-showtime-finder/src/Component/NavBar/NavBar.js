import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 35px
  display: flex
  flex-row: row nowrap
  justify-content: flex-start

`
const LineWrap = styled.div `
  width: 35px
  height: 30px
  cursor: pointer
  margin: 15px 0 0 15px
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  justify-content: space-around
`
const Lines = styled.div `
  width: 35px
  height: 2px
  background-color: #FFF
`

export default class Nav extends React.Component {

  // constructor(props) {
  //   super(props);
  //
  // }

  opened = () => {
    console.log("CLICKED");
  }


  render(){
    return(
      <Wrapper>
        <LineWrap onClick={this.opened}>
          <Lines />
          <Lines />
          <Lines />
        </LineWrap>
      </Wrapper>
    )
  }
}
