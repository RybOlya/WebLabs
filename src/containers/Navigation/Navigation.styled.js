import styled from 'styled-components';
export const LinkingWrapper = styled.div`
.selected {
    :after {
        content: '';
        display: block;
        position: absolute;
    }
}
ul {
    padding: 0;
    list-style-type:none;
    display: flex;
    align-items: center;
    justify-content: left;
    margin: 0;
    font-family: 'Saira Condensed', sans-serif;
    font-weight:200;
}
li {
    display: inline-block;
    padding: 5px 5px 10px 5px;
    position: relative;
    font-weight: bold;
    margin: 10px 30px;
    font-size: 24px;
    font-weight: 100;
    justify-content: left;
    a {
        color: black;
    }
}
`
export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    table-layout: fixed;
    border-spacing: 10px;
    > div {
        display: flex;
    }
    p {
        font-size: 20px;
    }
    span {
        font-size: 24px;
    }
`;