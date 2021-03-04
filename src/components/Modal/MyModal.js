import React from 'react'
import { Modal as ModalAntd} from 'antd'


export default function MyModal(props) {
    const {children, title, isVisible, setIsVisible, ...other } = props;
    const CancelModal = () => {
        setIsVisible(false);
    }
    return (
        <ModalAntd
            title={title}
            centered
            visible={isVisible}
            destroyOnClose={true}
            onCancel={CancelModal}
            footer={false}
            {...other}
        >
            {children}
        </ModalAntd>
    )
}
