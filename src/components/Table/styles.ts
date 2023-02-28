import styled from 'styled-components';

export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
`;

export const TableHeader = styled.th`
  background-color: #f2f2f2;
  color: #333;
  text-align: left;
  padding: 12px;
`;

export const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const TableDeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 8px;
`;

export const TableEditButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const PaginationWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  button {
    padding: 8px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 8px;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  & .pagination-buttons {
    display: flex;
    align-items: center;
  }

  & .pagination-infos {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  select {
    padding: 8px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-left: 8px;
  }

  input[type="number"] {
    padding: 8px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-left: 8px;
    width: 100px;
  }
`;