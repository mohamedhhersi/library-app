import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function BookInfo({ books }) {
  return (
    <div>
      <div id="books__body">
        <main id="books__main">
          <div className="books__container">
            <div className="row">
              <div className="book__selected--top">
                <Link to="/books" className="book__link">
                  <FontAwesomeIcon icon="arrow-left" />
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default BookInfo;
