import React, {useState} from 'react'
import './popup.scss';

export const Popup = () => {
  const [toggle, setToggle] = useState(true);

  const closePopup = () => {
    setToggle(prev => !prev)
  }

  return (
    <>
      <div>
        <button onClick={() => setToggle(!toggle)}>Show</button>
      </div>

      <div className={toggle ? 'popup-info' : 'popup-info popup-info--active'}>
        <div className="popup-info__content">
          <div className="close-popup" onClick={closePopup}></div>
          <div className="popup-info__content-title">
            <h2>Преддоговорная информация</h2>
          </div>
          <div className="popup-info__content-body-wrap">
            <div className="popup-info__content-body">
              <p>
                Lorem Ipsum is a fish text often used in print and web design.
                Lorem Ipsum has been the standard "fish" for Latin texts since
                the early 16th century. At the time, an unnamed printer created
                a large collection of font sizes and shapes using Lorem Ipsum to
                print samples. Lorem Ipsum is not the only LorLorem Ipsum for
                sample printing. Lorem ipsum Lorem Ipsum is a fish text often
                used in print and web design. Lorem Ipsum has t using Lorem
                Ipsum to print samples. Lorem Ipsum is not the only LorLorem
                Ipsum for sample printing. Lorem ipsum Lorem Ipsum is a fish
                text often used in print and web design. Lorem Ipsum has t Ipsum
                for sample printing. Lorem ipsum Lorem Ipsum is a fish text
                often used in print and web design. Lorem Lorem Ipsum to print
                samples. Lorem Ipsum is not the only LorLorem Ipsum for sample
                printing. Lorem ipsum Lorem Ipsum is a fish text often used in
                print and web design. Lorem Ipsum has t Ipsum for sample
                printing. Lorem ipsum Lorem Ipsum is a fish text often used in
                print and web design
              </p>
              <p>
                Lorem Ipsum is a fish text often used in print and web design.
                Lorem Ipsum has been the standard "fish" for Latin texts since
                the early 16th century. At the time, an unnamed printer created
                a large collection of font sizes and shapes using Lorem Ipsum to
                print samples. Lorem Ipsum is not the only LorLorem Ipsum for
                sample printing. Lorem ipsum Lorem Ipsum is a fish text often
                used in print and web design. Lorem Ipsum has t using Lorem
                Ipsum to print samples. Lorem Ipsum is not the only LorLorem
                Ipsum for sample printing. Lorem ipsum Lorem Ipsum is a fish
                text often used in print and web design. Lorem Ipsum has t Ipsum
                for sample printing. Lorem ipsum Lorem Ipsum is a fish text
                often used in print and web design. Lorem Lorem Ipsum to print
                samples. Lorem Ipsum is not the only LorLorem Ipsum for sample
                printing. Lorem ipsum Lorem Ipsum is a fish text often used in
                print and web design. Lorem Ipsum has t Ipsum for sample
                printing. Lorem ipsum Lorem Ipsum is a fish text often used in
                print and web design
              </p>
              <p>
                Lorem Ipsum is a fish text often used in print and web design.
                Lorem Ipsum has been the standard "fish" for Latin texts since
                the early 16th century. At the time, an unnamed printer created
                a large collection of font sizes and shapes using Lorem Ipsum to
                print samples. Lorem Ipsum is not the only LorLorem Ipsum for
                sample printing. Lorem ipsum Lorem Ipsum is a fish text often
                used in print and web design. Lorem Ipsum has t using Lorem
                Ipsum to print samples. Lorem Ipsum is not the only LorLorem
                Ipsum for sample printing. Lorem ipsum Lorem Ipsum is a fish
                text often used in print and web design. Lorem Ipsum has t Ipsum
                for sample printing. Lorem ipsum Lorem Ipsum is a fish text
                often used in print and web design. Lorem Lorem Ipsum to print
                samples. Lorem Ipsum is not the only LorLorem Ipsum for sample
                printing. Lorem ipsum Lorem Ipsum is a fish text often used in
                print and web design. Lorem Ipsum has t Ipsum for sample
                printing. Lorem ipsum Lorem Ipsum is a fish text often used in
                print and web design
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


