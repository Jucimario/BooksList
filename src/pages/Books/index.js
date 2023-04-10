import React from "react";
import { Link } from "react-router-dom";
import { FiPower, FiEdit, FiTrash2 } from "react-icons/fi";

import "./styles.css";

import logoImage from "../../assets/logo.svg";

export default function Book() {

    return (
        <div className="book-container">

            <header>
                <img src={logoImage} alt="EBooks" />
                <span>Bem vindo, <strong>Usuario</strong>!</span>
                <Link className="button" to="../book/new">Add Novo Livro</Link>
                <button type="button">
                    <FiPower size={18} color="#251FC5" />
                </button>
            </header>

            <h1>Livros Cadastrados</h1>
            <ul>
                <li>
                    <strong>Titulo:</strong>
                    <p>Titulo do Livro</p>
                    <strong>Autor:</strong>
                    <p>Autor do Livro</p>
                    <strong>Preço:</strong>
                    <p>Preço do Livro</p>
                    <strong>Lançamento Data:</strong>
                    <p>12/10/2017</p>

                    <button type="button">
                        <FiEdit size={20} color="#251FC5" />

                    </button>
                    <button type="button">
                        <FiTrash2 size={20} color="#251FC5" />

                    </button>
                </li>
                <li>
                    <strong>Titulo:</strong>
                    <p>Titulo do Livro</p>
                    <strong>Autor:</strong>
                    <p>Autor do Livro</p>
                    <strong>Preço:</strong>
                    <p>Preço do Livro</p>
                    <strong>Lançamento Data:</strong>
                    <p>12/10/2017</p>

                    <button type="button">
                        <FiEdit size={20} color="#251FC5" />

                    </button>
                    <button type="button">
                        <FiTrash2 size={20} color="#251FC5" />

                    </button>
                </li>
                <li>
                    <strong>Titulo:</strong>
                    <p>Titulo do Livro</p>
                    <strong>Autor:</strong>
                    <p>Autor do Livro</p>
                    <strong>Preço:</strong>
                    <p>Preço do Livro</p>
                    <strong>Lançamento Data:</strong>
                    <p>12/10/2017</p>

                    <button type="button">
                        <FiEdit size={20} color="#251FC5" />

                    </button>
                    <button type="button">
                        <FiTrash2 size={20} color="#251FC5" />

                    </button>
                </li>
                <li>
                    <strong>Titulo:</strong>
                    <p>Titulo do Livro</p>
                    <strong>Autor:</strong>
                    <p>Autor do Livro</p>
                    <strong>Preço:</strong>
                    <p>Preço do Livro</p>
                    <strong>Lançamento Data:</strong>
                    <p>12/10/2017</p>

                    <button type="button">
                        <FiEdit size={20} color="#251FC5" />

                    </button>
                    <button type="button">
                        <FiTrash2 size={20} color="#251FC5" />

                    </button>
                </li>
                <li>
                    <strong>Titulo:</strong>
                    <p>Titulo do Livro</p>
                    <strong>Autor:</strong>
                    <p>Autor do Livro</p>
                    <strong>Preço:</strong>
                    <p>Preço do Livro</p>
                    <strong>Lançamento Data:</strong>
                    <p>12/10/2017</p>

                    <button type="button">
                        <FiEdit size={20} color="#251FC5" />

                    </button>
                    <button type="button">
                        <FiTrash2 size={20} color="#251FC5" />

                    </button>
                </li>
                <li>
                    <strong>Titulo:</strong>
                    <p>Titulo do Livro</p>
                    <strong>Autor:</strong>
                    <p>Autor do Livro</p>
                    <strong>Preço:</strong>
                    <p>Preço do Livro</p>
                    <strong>Lançamento Data:</strong>
                    <p>12/10/2017</p>

                    <button type="button">
                        <FiEdit size={20} color="#251FC5" />

                    </button>
                    <button type="button">
                        <FiTrash2 size={20} color="#251FC5" />

                    </button>
                </li>
                <li>
                    <strong>Titulo:</strong>
                    <p>Titulo do Livro</p>
                    <strong>Autor:</strong>
                    <p>Autor do Livro</p>
                    <strong>Preço:</strong>
                    <p>Preço do Livro</p>
                    <strong>Lançamento Data:</strong>
                    <p>12/10/2017</p>

                    <button type="button">
                        <FiEdit size={20} color="#251FC5" />

                    </button>
                    <button type="button">
                        <FiTrash2 size={20} color="#251FC5" />

                    </button>
                </li>
                <li>
                    <strong>Titulo:</strong>
                    <p>Titulo do Livro</p>
                    <strong>Autor:</strong>
                    <p>Autor do Livro</p>
                    <strong>Preço:</strong>
                    <p>Preço do Livro</p>
                    <strong>Lançamento Data:</strong>
                    <p>12/10/2017</p>

                    <button type="button">
                        <FiEdit size={20} color="#251FC5" />

                    </button>
                    <button type="button">
                        <FiTrash2 size={20} color="#251FC5" />

                    </button>
                </li>
            </ul>
        </div>
    );
}
