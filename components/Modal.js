import React from 'react';
import { Modal } from 'antd';

export default function CadastrarEvento(props){

  return (
    <div>
      <Modal title="Cadastrar Evento" 
      onOk={props.ok} 
      onCancel={props.cancel} 
      visible={props.visible}
      style={{top: 35}}
      >
        {props.children}
      </Modal>
      </div>
  );
};