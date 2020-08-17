import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1100px;
    background: #ebfeff;
    border-radius: 10px;
    border: 2px solid #0085a3;
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;

    p {
        font-size: 1rem;
    }

    .the-qstn{
        width: 450px;
    }
`

type AnsProps = {
    correct: boolean;
    clicked: boolean;
}

export const AnsWrapper = styled.div<AnsProps>`
    transition: al 0.35s ease;

    :hover {
        opacity: 0.8
    }

    button {
        background: blue;
        cursor: pointer;
        user-select: none;
        font-size: 0.9 rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;

        background: ${({ correct, clicked }) => 
            correct ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
            : !correct && clicked 
            ? 'linear-gradient(90deg, #ff5656, #c16868)'
            : 'linear-gradient(90deg, #56ccff, #6eagb4)'
        };
        border: 3px solid #fff;
        bos-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        color: #fff;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    }
`