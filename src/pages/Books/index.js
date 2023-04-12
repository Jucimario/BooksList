import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPower, FiEdit, FiTrash2 } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";

import logoImage from "../../assets/logo.svg";

export default function Book() {

    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(0);

    const userName = localStorage.getItem('userName');
    const accessToken = localStorage.getItem('accessToken');

    const authorization = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };

    const navigate = useNavigate();

    useEffect(() => {
        fetchMoreBooks();
    }, accessToken);

    async function fetchMoreBooks() {
        try {
            const response = await api.get(`api/Book/v1/asc/4/${page}`, authorization);
            setBooks([...books, ...response.data.list]);
            setPage(page + 1);
        }
        catch (err) {
            alert('Falha ao carregar mais livros, tente novamente')
        }
    }

    async function logout() {
        try {
            await api.get('api/Auth/v1/revoke', authorization);
            localStorage.clear();
            navigate('/');
        }
        catch (err) {
            alert('Falha ao deslogar, tente novamente')
        }
    };

    async function editBook(id) {
        try {
            navigate(`/book/new/${id}`);
        }
        catch (err) {
            alert('Falha ao editar livro, tente novamente')
        }
    };

    async function deleteBook(id) {
        try {
            await api.delete(`api/Book/v1/${id}`, authorization);
            setBooks(books.filter(book => book.id !== id));
        }
        catch (err) {
            alert('Falha ao deletar livro, tente novamente')
        }
    };

    return (
        <div className="book-container">

            <header>
                <img src={logoImage} alt="EBooks" />
                <span>Bem vindo, <strong>{userName.toUpperCase}</strong>!</span>
                <Link className="button" to="/book/new/0">Add Novo Livro</Link>
                <button onClick={logout} type="button">
                    <FiPower size={18} color="#251FC5" />
                </button>
            </header>

            <h1>Livros Cadastrados</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <strong>Titulo:</strong>
                        <p>{book.title}</p>
                        <strong>Autor:</strong>
                        <p>{book.author}</p>
                        <strong>Preço:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(book.price)}</p>
                        <strong>Lançamento Data:</strong>
                        <p>{Intl.DateTimeFormat('pt-BR').format(new Date(book.launchDate))}</p>

                        <button onClick={() => editBook(book.id)} type="button">
                            <FiEdit size={20} color="#251FC5" />
                        </button>

                        <button onClick={() => deleteBook(book.id)} type="button">
                            <FiTrash2 size={20} color="#251FC5" />
                        </button>
                    </li>
                ))}

            </ul>
            <button className="button" type="button" onClick={fetchMoreBooks}>
                carregar Mais
            </button>
        </div>
    );
}
