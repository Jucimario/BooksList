import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import './styles.css';

import logoImage from "../../../assets/logo.svg";

export default function NewBook() {
    return (
        <div className="new-book-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="EBooks"></img>
                    <h1>Add Novo Livro</h1>
                    <p>Entre com a informação do livro e clique em 'Add'</p>
                    <Link className="back-link" to="/books">
                        <FiArrowLeft size={16} color="#251FC5" />
                        Home
                    </Link>
                </section>
                <form action="" className="">
                    <input placeholder="Titulo" />
                    <input placeholder="Autor" />
                    <input type="date" />
                    <input placeholder="Preço" />

                    <button className="button" type="submit">Add</button>
                </form>
            </div>
        </div>
    );
}