import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../../services/api";

import './styles.css';

import logoImage from "../../../assets/logo.svg";

export default function NewBook() {

    const [id, setId] = useState(null);
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [launchDate, setLaunchDate] = useState('');
    const [price, setPrice] = useState('');

    const { bookId } = useParams();

    const navigate = useNavigate();

    const accessToken = localStorage.getItem('accessToken');

    const authorization = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };

    useEffect(() => {
        if (bookId === '0') return;
        else {
            loadBook();
        }
    }, [bookId]);

    async function loadBook() {
        try {
            const response = await api.get(`api/Book/v1/${bookId}`, authorization);

            let adjustedDate = response.data.launchDate.split("T", 10)[0];

            setId(response.data.id);
            setAuthor(response.data.author);
            setTitle(response.data.title);
            setLaunchDate(adjustedDate);
            setPrice(response.data.price);
        }
        catch {
            alert('Falha ao carregar livro, tente novamente');
            navigate('/books');
        }

    }

    async function saveOrUpdate(e) {
        e.preventDefault();

        const data = {
            author,
            title,
            launchDate,
            price
        };

        try {
            if (bookId === '0') await api.post('api/Book/v1', data, authorization);
            else {
                data.id = id;
                await api.put('api/Book/v1', data, authorization);
            }
        }
        catch (err) {
            alert('Falha ao adicionar livro, tente novamente')
        }
        navigate('/books');
    }

    return (
        <div className="new-book-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="EBooks"></img>
                    <h1>{bookId === '0' ? 'Add Novo' : 'Atualizar'} Livro</h1>
                    <p>Entre com as informações do livro e clique em {bookId === '0' ? `'Add'` : `'Atualizar'`}</p>
                    <Link className="back-link" to="/books">
                        <FiArrowLeft size={16} color="#251FC5" />
                        Home
                    </Link>
                </section>
                <form onSubmit={saveOrUpdate}>
                    <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="Titulo" />
                    <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Autor" />
                    <input value={launchDate} onChange={e => setLaunchDate(e.target.value)} type="date" />
                    <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Preço" />

                    <button className="button" type="submit">{bookId === '0' ? 'Add' : 'Atualizar'}</button>
                </form>
            </div>
        </div>
    );
}