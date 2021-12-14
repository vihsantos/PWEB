import './fun-styles.css';
import Person from "/pweb/src/assets/person.png"
import NavBarFuncionarios from '../componentes/NavBarFuncionarios';
import IconAdd from "/pweb/src/assets/icon-add.png"

export default function Funcionarios(){
    return (
        <div className='container-fun'>
            <NavBarFuncionarios></NavBarFuncionarios>
            <div className='content-fun'>
                <div className='card-funcionarios'>
                    <div className='circle-person'>
                        <img className='person-img' src={Person} alt='pessoa'></img>
                    </div>
                    <div className='campos-fun'>
                        <div className='label-fun'>Nome:</div>
                        <div className='valor-fun'>Qualquer</div>
                    </div>
                    <div className='campos-fun'>
                        <div className='label-fun'>Nome:</div>
                        <div className='valor-fun'>Qualquer</div>
                    </div>
                </div>
                <div className='adicionar-funcionarios'>
                    <img className='add-fun' src={IconAdd} alt='add-fun'></img>
                </div>
            </div>
        </div>
    );
}