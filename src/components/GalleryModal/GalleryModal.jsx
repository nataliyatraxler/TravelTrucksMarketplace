import { useState } from "react";
import Modal from "react-modal";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import css from "./GalleryModal.module.css";

export default function GalleryModal({ gallery, name }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % gallery.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <ul className={css.gallery}>
        {gallery.map((image, index) => (
          <li className={css.imageItem} key={image.thumb}>
            <img
              src={image.thumb}
              alt={name}
              className={css.image}
              onClick={() => openModal(index)}
            />
          </li>
        ))}
      </ul>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <button onClick={prevImage} className={css.navButton}>
          <SlArrowLeft />
        </button>
        <img
          src={gallery[selectedImageIndex].original}
          alt="Enlarged"
          className={css.enlargedImage}
        />
        <button onClick={nextImage} className={css.navButton}>
          <SlArrowRight />
        </button>
      </Modal>
    </>
  );
}
