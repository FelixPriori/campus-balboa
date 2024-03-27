"use client"
import { useState } from 'react'
import HelpIconc from "@/assets/svgs/help";
import Modal from 'react-modal';
import styles from './styles.module.scss';
import { useTranslations } from 'next-intl';

Modal.setAppElement(".mbj-event");

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


export default function FloatingHelpButton() {
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(!showModal);
    const t = useTranslations('Events.2024.MtlBalJam.contactModal')

    return (
        <>
            <button onClick={handleShowModal} className={styles.floatingHelpButton}>
                <HelpIconc />
            </button>
            <Modal
                isOpen={showModal}
                style={customStyles}
            >
                <h2>{t('title')}</h2>
                <button onClick={handleShowModal}>{t('close')}</button>
            </Modal>
        </>
    )
}