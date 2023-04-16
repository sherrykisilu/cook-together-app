import React from 'react'
import ReactDOM from 'react-dom'
import NewRecipeForm from './NewRecipeForm';

const Backdrop = ({onClick}) => {
    return <div className="fixed inset-0 bg-opacity-30 z-10 w-screen h-screen bg-black" onClick={onClick}></div>;
};

const ModalOverlay = ({onClick}) => {
    return (
        <>
            <div className="fixed object-fit right-16 w-3/4 z-10 flex flex-col justify-center items-end bg-transparent">
                <span className="fixed top-10 -mr-6 text-2xl font-bold justify-end text-white hover:cursor-pointer" onClick={onClick}>
                    <span className="-mt-2 text-4xl">C</span>lose
                </span>
                <NewRecipeForm onClickButton={onClick} />
            </div>
        </>
    );
};

const NewRecipeModal = ({ onActivate }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={onActivate} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay onClick={onActivate} />, document.getElementById('overlay-root'))}
    </>
  )
}

export default NewRecipeModal