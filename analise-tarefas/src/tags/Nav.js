import React from 'react'
import './Nav.css'

function Nav() {
    return (

        <div className='alinhador'>
            <nav>
                <ul>
                    <li><a href="#addTask">Adicionar tarefa</a></li>
                    <li><a href="#addProject">Adicionar projeto</a></li>
                    <li><a href="#gerenciar">Gerenciar</a></li>
                </ul>
            </nav>
        </div>

    )

}

export default Nav;