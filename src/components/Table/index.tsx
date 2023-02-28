import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import { Table, TableWrapper, TableHeader, TableData, TableDeleteButton, TableEditButton, PaginationWrapper } from "./styles";
import { useModal } from "../../context/ModalContext";
import { deleteProduct } from "../../services/products";
import Modal from "../Modal";

interface TableProps {
  data: any;
}

interface Column {
  Header: string;
  accessor: string;
}

export function TableComponent({ data }: TableProps) {
  const { modalData, setModalData, openModal, setTypeModal } = useModal();

  const columns: Column[] = useMemo(
    () => [
      {
        Header: "Nome",
        accessor: "title",
      },
      {
        Header: "Categoria",
        accessor: "category",
      },
      {
        Header: "Preço",
        accessor: "price",
      },
      {
        Header: "Ações",
        accessor: "actions",
        Cell: ({ row }: any) => (
          <>
            <TableDeleteButton onClick={() => handleDeleteButtonClick(row.values)}>Deletar</TableDeleteButton>
            <TableEditButton onClick={() => handleButtonClick(row.values)}>Editar</TableEditButton>
          </>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    pageCount,
    previousPage,
    nextPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: data || [],
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  const handleButtonClick = (data: any[]) => {
    setModalData(data);
    openModal();
    setTypeModal("edit");
  };

  const handleDeleteButtonClick = async (data: any) => {
    try {
      await deleteProduct(data.id)
      setModalData(true);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
    {!!data && 
    data.length > 0 && 
    (
      <TableWrapper>
        <Table >
        <Table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableHeader {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </TableHeader>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page?.map(( row, i ) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <TableData {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </TableData>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
          <PaginationWrapper>
            <div className="pagination-buttons">
              <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {"<<"}
              </button>{" "}
              <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                {"<"}
              </button>{" "}
              <button onClick={() => nextPage()} disabled={!canNextPage}>
                {">"}
              </button>{" "}
              <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {">>"}
              </button>{" "}
              <span>
                Página{" "}
                <strong>
                  {pageIndex + 1} de {pageOptions.length}
                </strong>{" "}
              </span>
            </div>
            <div className="pagination-infos">
              <span>
                Ir para a página:{" "}
              </span>{" "}
                <input
                  type="number"
                  defaultValue={pageIndex + 1}
                  onChange={(e) => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0;
                    gotoPage(page);
                  }}
                />
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Mostrar {pageSize}
                  </option>
                ))}
              </select>
            </div>
          </PaginationWrapper>
        </Table>
      </TableWrapper>
    )}
    </>
  );
}

