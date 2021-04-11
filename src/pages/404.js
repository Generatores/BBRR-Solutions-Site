import "./404.css";
import Stdbtn from "../components/std-button.js";

export default function Error404() {
  return (
    <div className='body_404'>
      <p>404 Error</p>
      <p>Page not found</p>
      <Stdbtn button_text='Return to Home' button_path='/' />
    </div>
  );
}
