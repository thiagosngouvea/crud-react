import React, { useState, useEffect, useCallback } from 'react';
import { getProducts } from '../../services/products';
import { TableComponent }  from '../../components/Table';
import { Button } from './styles';
import  Form  from '../../components/Form';
import { useModal } from '../../context/ModalContext';
import Modal from '../../components/Modal';

export function Home() {
    const [products, setProducts] = useState([]);
    const { isModalOpen, closeModal, modalData, setModalData, openModal, setTypeModal  } = useModal();

    const fetchProducts = useCallback(async () => {
        const response = await getProducts();
        setProducts(response);
    }, []);

    useEffect(() => {
        fetchProducts();
        setModalData(null);
    }, [fetchProducts, modalData]);

    const handleSubmit = (useCallback (async () => {
        const response = await getProducts();
        setProducts(response);
    }, []));

    return (
        <div>
            <Button onClick={() => {
                openModal();
                setTypeModal("add");
            }}>Adicionar Produto</Button>
            {!!products &&
            products.length > 0 && (
                <TableComponent data={products} />
            )}
            {isModalOpen && 
            <Modal onClose={closeModal}>
                <Form 
                onSubmit={handleSubmit}
                />
            </Modal>
            }
        </div>
    );
}