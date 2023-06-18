import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 400px;
  margin: 30px auto;
  font-weight: 700;
  font-size: 20px;
  background-color: beige;
  text-align: center;
  border-radius: 20px;
  box-shadow: 10px 15px 19px -4px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 15px 19px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 15px 19px -4px rgba(0, 0, 0, 0.75);
  text-shadow: -1px 4px 4px rgba(0, 0, 0, 0.6);

  h1,
  h2 {
    text-align: center;
    text-shadow: -1px 4px 4px rgba(0, 0, 0, 0.6);
  }
`;
export const Form = styled.form`
  margin-top: 15px;
  padding-bottom: 15px;
  border-radius: 5px;
  border-bottom: ${props => `1px solid ${props.theme.colors.bd}`};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 5px 0 25px 0;
  padding-top: 15px;
  font-size: 18px;
  font-weight: 600;
`;

export const DataInput = styled.input`
  display: flex;
  margin: 5px 10px 20px 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 4px 4px 16px 2px rgba(166, 179, 28, 0.62) inset;
  -webkit-box-shadow: 4px 4px 16px 2px rgba(166, 179, 28, 0.62) inset;
  -moz-box-shadow: 4px 4px 16px 2px rgba(166, 179, 28, 0.62) inset;
  box-sizing: border-box;
`;

export const SubmitButton = styled.btn`
  margin-bottom: 15px;
  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(0, 0, 0, 0.24) 10px 10px 5px 0px;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgb(255, 255, 255) -2px -2px 5px, rgb(139, 167, 147) 2px 2px 5px;
    transform: scale(1.05) rotate(-1deg);
  }

  &:active {
    background: rgb(33, 147, 90);
    box-shadow: 0 3px rgb(33, 147, 90) inset;
  }
`;

export const Icon = styled.div`
  margin-right: 8px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
`;
