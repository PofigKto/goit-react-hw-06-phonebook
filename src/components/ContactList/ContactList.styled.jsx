import styled from 'styled-components';

export const ContactsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const ContactsBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border: none;
  border-radius: 5px;
  font-size: small;
  height: 25px;
  line-height: 20px;
  margin-left: 8px;
  margin-right: 6px;
  max-width: 50px;
  padding: 0 16px 0 16px;
  color: inherit;
  background-color: rgba(241, 208, 202, 0.3);
  border: 1px solid rgba(241, 208, 202, 0.4);
  cursor: pointer;
  transition: border-color 250ms linear, color 250ms linear,
    background-color 250ms linear;
  :hover {
    border-color: rgba(209, 72, 17, 0.945);
    color: rgba(209, 72, 17, 0.945);
    background-color: rgba(240, 213, 183, 0.5);
  }
`;
export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  font-size: large;
  justify-content: space-between;
`;