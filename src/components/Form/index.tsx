import React, { useState } from "react";
import { useModal } from "../../context/ModalContext";
import { updateProduct, createProduct } from '../../services/products';
import { FormWrapper, Label, Input, SubmitButton } from "./styles";
import { v4 as uuidv4 } from 'uuid';

type FormProps = {
  onSubmit: (modalData: FormData) => void;
};

type FormData = {
  title: string;
  category: string;
  price: number;
};

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const { modalData, closeModal, typeModal } = useModal();
  const [id, setId] = useState(modalData?.id || '');
  const [title, setTitle] = useState(modalData?.title || '');
  const [category, setCategory] = useState(modalData?.category || '');
  const [price, setPrice] = useState(modalData?.price || 0);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (typeModal === "add") {
        await createProduct({
          id: uuidv4(),
          title: title,
          category: category,
          price: price,
        });
        closeModal();
        onSubmit(modalData);
      } else {
        await updateProduct(id, {
          title: title,
          category: category,
          price: price,
        });
        closeModal();
        onSubmit(modalData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Label htmlFor="title">Título:</Label>
      <Input
        type="text"
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Label htmlFor="category">Categoria:</Label>
      <Input
        type="text"
        id="category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      />

      <Label htmlFor="price">Preço:</Label>
      <Input
        type="number"
        id="price"
        value={price}
        onChange={(event) => setPrice(parseFloat(event.target.value))}
      />
      <SubmitButton type="submit">Salvar</SubmitButton>
    </FormWrapper>
  );
};

export default Form;
